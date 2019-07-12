import express from "express";
import {ApolloServer} from "apollo-server-express";

import GithubApi from "./GithubApi";
import typeDefs from "./modules/repository/Schema";
import resolvers from "./modules/repository/Resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GithubApi: new GithubApi(),
  }),
});

const app = express();

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
  console.log(`Server running on http://localhost:4000`);
});
