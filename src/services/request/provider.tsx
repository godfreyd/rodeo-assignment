import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Apollo,
} from "@apollo/client";
import { FC, ReactNode } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const ApolloProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Apollo client={client}>{children}</Apollo>;
};

export default ApolloProvider;
