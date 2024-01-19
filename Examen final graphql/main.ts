import {ApolloServer} from "npm:@apollo/server@4.9.5"
import { startStandaloneServer } from "npm:@apollo/server@4.9.5/standalone"

import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import mongoose from "npm:mongoose@8.0.1"
import { typeDefs } from "./Gql/typeDefs.ts";

let  MONGO_URL = Deno.env.get("MONGO_URL") 

if (!MONGO_URL) {
  MONGO_URL= "mongodb+srv://jmviajero:12345@cluster0.mfoc843.mongodb.net/TARDIS?retryWrites=true&w=majority"
}
await mongoose.connect(MONGO_URL);
console.log("conectado")


try {

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    }
  })
  
  
  const { url } = await startStandaloneServer(server, {

    listen: {
      port: 3003,
    },

  });
  
  console.info(`Server is listening ${url}`);

} catch (error) { 
  console.log(error);
}