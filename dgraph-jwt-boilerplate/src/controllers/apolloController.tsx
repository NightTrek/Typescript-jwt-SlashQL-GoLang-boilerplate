import { ApolloClient, InMemoryCache } from '@apollo/client';


export const createApolloClient = () => {

    return new ApolloClient({
      uri: "https://breakable-bite.us-west-2.aws.cloud.dgraph.io/graphql",
      cache: new InMemoryCache(),
    })
  }


  export function avatar(img: string | null | undefined) {
    return img ?? "/" + Math.floor(Math.random() * (9 - 1) + 1) + ".svg"
  }