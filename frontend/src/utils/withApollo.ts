import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createWithApollo } from "./createWithApollo";
import { NextPageContext } from "next";

/**
 * Initialization of Apollo Server, this is what allows the front
 * end to interace with GraphQL endpoints
 * @param ctx Allows to use serverside rendering and other NextJS features with apollo server.
 */

const client = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache(),
  });

export const withApollo = createWithApollo(client);
