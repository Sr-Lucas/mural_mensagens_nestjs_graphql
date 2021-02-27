import { HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/react-hooks";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3333/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
