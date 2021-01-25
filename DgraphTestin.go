package main

import (
	"context"
	"crypto/x509"
	"encoding/json"
	"fmt"
	"log"
	"strings"

	"github.com/dgraph-io/dgo"
	"github.com/dgraph-io/dgo/protos/api"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

var slashPort = "443"

type authCreds struct {
	token string
}

func (a *authCreds) GetRequestMetadata(ctx context.Context, uri ...string) (map[string]string, error) {
	return map[string]string{"Authorization": a.token}, nil
}
func (a *authCreds) RequireTransportSecurity() bool {
	return true
}

// DialSlashEndpoint creates a new TLS connection to a Slash GraphQL or Slash Enterprise backend
// It requires the backend endpoint as well as the api key
func DialSlashEndpoint(endpoint, key string) (*grpc.ClientConn, error) {
	// u, err := url.Parse(endpoint)
	// if err != nil {
	// 	return nil, err
	// }

	urlParts := strings.SplitN(endpoint, ".", 2)

	host := urlParts[0] + ".grpc." + urlParts[1] + ":" + slashPort
	pool, err := x509.SystemCertPool()
	if err != nil {
		return nil, err
	}

	creds := credentials.NewClientTLSFromCert(pool, "")
	return grpc.Dial(
		host,
		grpc.WithTransportCredentials(creds),
		grpc.WithPerRPCCredentials(&authCreds{key}),
	)
}

func newClient() *dgo.Dgraph {
	client, err := DialSlashEndpoint("breakable-bite.us-west-2.aws.cloud.dgraph.io/graphql", "cGY07xpeab1bogVoczQEsmpKsHKm7Ld/nyDzpOAriLg=")
	if err != nil {
		fmt.Println("error establishing graphQL connection")
		log.Fatal(err)
	}
	return dgo.NewDgraphClient(api.NewDgraphClient(client))
}

func main() {

	c := newClient()

	ctx := context.Background()

	fmt.Println("client created")
	var query string = `
	{
		queryUser(filter: {email:{anyofterms: "` + "daniels@dual4t.com" + `"}}){
		  username
		  firstName
		  lastName
		  email
		  UID
		}
	}
	  `
	txn := c.NewTxn()
	defer txn.Discard(ctx)
	fmt.Println("tx started")
	resp, err := txn.Query(context.Background(), query)
	if err != nil {
		fmt.Println("error querying ")
		log.Fatal(err)
	}
	fmt.Println("query completed")
	fmt.Println(resp)

	//
	// After we get the user, we have to decode them into structs so that
	// we can manipulate the data.
	var decode struct {
		queryUser []struct {
			Username  string
			FirstName string
			LastName  string
			Email     string
			UID       string
		}
	}

	if err := json.Unmarshal(resp.GetJson(), &decode); err != nil {
		fmt.Println("error Unmarshalling")
		log.Fatal(err)
	}
}
