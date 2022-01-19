import express from 'express'
import http from 'http'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import schema from './schema'

async function startApolloServer(typeDefs) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 8000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`);
}

startApolloServer(schema)
