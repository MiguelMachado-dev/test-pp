import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@as-integrations/express5";
import cors from "cors";
import express from "express";

import { resolvers } from "./resolvers";
import { readFile } from "node:fs/promises";

const PORT = 9000;

const typeDefs = await readFile("./src/schema.graphql", "utf-8");

const app = express();

app.use(cors(), express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

// Create and use the GraphQL handler.
app.use("/graphql", apolloMiddleware(server));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
