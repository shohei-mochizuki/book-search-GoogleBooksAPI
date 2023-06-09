const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    description: String!
    bookId: String!
    image: String
    title: String!
    authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(description: String!, bookId: String!, image: String, title: String!, authors: [String]): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
