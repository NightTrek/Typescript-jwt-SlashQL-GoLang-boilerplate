package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"time"
)

/// https://github.com/gostor/awesome-go-storage

///https://gowebexamples.com/static-files/
/// slash graphQL instance below
/// https://breakable-bite.us-west-2.aws.cloud.dgraph.io/graphql

//bcrypt works for go
//go get golang.org/x/crypto/bcrypt

var emailRegex = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

// isEmailValid checks if the email provided passes the required structure and length.
func isEmailValid(e string) bool {
	if len(e) < 3 && len(e) > 254 {
		return false
	}
	return emailRegex.MatchString(e)
}

//example below
func hello(w http.ResponseWriter, req *http.Request) {

	ctx := req.Context()
	fmt.Println("server: hello handler started")
	defer fmt.Println("server: hello handler ended")

	select {
	case <-time.After(10 * time.Second):
		fmt.Fprintf(w, "hello\n")
	case <-ctx.Done():

		err := ctx.Err()
		fmt.Println("server:", err)
		internalError := http.StatusInternalServerError
		http.Error(w, err.Error(), internalError)
	}
}

// dgraph area

// func newClient() *dgo.Dgraph {
// 	client, err := dgo.DialSlashEndpoint("breakable-bite.us-west-2.aws.cloud.dgraph.io/graphql", "cGY07xpeab1bogVoczQEsmpKsHKm7Ld/nyDzpOAriLg=")
// 	if err != nil {
// 		fmt.Println("error establishing graphQL connection")
// 		log.Fatal(err)
// 	}
// 	return dgo.NewDgraphClient(
// 		api.NewDgraphClient(client),
// 	)
// }

//web API area
type SignUpJWT struct {
	Email    string
	UserName string
	Password string
}

//

func signUpJWT(res http.ResponseWriter, req *http.Request) {

	//check if the request method is POST
	if req.Method != "POST" {
		res.WriteHeader(400)
		res.Write([]byte("Error must Use POST Request"))
		return
	}
	//Decode the body of the request from JSON
	var I SignUpJWT
	decoder := json.NewDecoder(req.Body)
	err := decoder.Decode(&I)
	if err != nil {
		http.Error(res, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println(I)

	//check if email is correct
	if !isEmailValid(I.Email) {
		res.WriteHeader(400)
		res.Write([]byte("Error Email must be valid " + I.Email))
		return
	}
	//check if there is a Username
	if len(I.UserName) < 4 || len(I.UserName) > 255 {
		res.WriteHeader(400)
		res.Write([]byte("Error user Name is invalid"))
		return
	}
	//check if there is a password
	if len(I.Password) < 4 || len(I.Password) > 255 {
		res.WriteHeader(400)
		res.Write([]byte("Error user password is invalid"))
		return
	}

	c := newClient()

	ctx := req.Context()

	fmt.Println("client created")
	var query string = `
	{
		queryUser(filter: {email:{anyofterms: "` + I.Email + `"}}){
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

	res.WriteHeader(200)
	res.Write([]byte("Success Signing up User"))
	//verify that it recived the correct input types to signup
	//create a new User Node in SlashQL
	//hash the password input and create a new Pass node in SlashQL
	//Create a JWT token for the User account and respond
}

func main() {

	http.HandleFunc("/test", hello)
	http.HandleFunc("/api/SignUp", signUpJWT)

	http.Handle("/", http.FileServer(http.Dir("./socialreading/build")))
	fmt.Println("Server Running on port 8001")
	log.Fatal(http.ListenAndServe(":8001", nil))

}
