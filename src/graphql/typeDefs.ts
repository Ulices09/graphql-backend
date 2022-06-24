import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    note: String
  }

  input UserCreateInput {
    firstName: String!
    lastName: String!
    note: String
  }

  input UserUpdateInput {
    firstName: String!
    lastName: String!
    note: String
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    userCreate(input: UserCreateInput!): User!
    userUpdate(id: String!, input: UserUpdateInput!): User!
    userDelete(id: String!): User!
  }
`;

export default typeDefs;
