import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";

const httpLink = {
  uri: "https://countries.trevorblades.com/",
};

export const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(),
});
