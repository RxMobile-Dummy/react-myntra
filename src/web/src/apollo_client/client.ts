import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

// const httpLink = new HttpLink({
//   uri: "https://48p1r2roz4.sse.codesandbox.io",
// });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4002/react-myntra"
//   link: ApolloLink.from([httpLink]),
});