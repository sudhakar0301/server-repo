// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { ApolloServer, gql } = require("apollo-server");
const { sign } = require("jsonwebtoken");
const SECRET_KEY = "myFirstSecretKey";
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    login(username: String!, password: String!): String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, World!",
  },

  Mutation: {
    login: (parent, { username, password }, context) => {
      // Replace with your authentication logic (e.g., check username and password)
      if (username === "user" && password === "password") {
        const token = sign({ username }, SECRET_KEY, {
          expiresIn: "1m",
        });
        return token;
      } else {
        throw new Error("Invalid credentials");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

//server.start();

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
