const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    login(username: String!, password: String!): String
  }
`;

module.exports = typeDefs;
