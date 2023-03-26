import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_THOUGHT = gql`
//   mutation addThought($thoughtText: String!) {
//     addThought(thoughtText: $thoughtText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;

export const SAVE_BOOK = gql`
  mutation Mutation($description: String!, $bookId: String!, $image: String, $title: String!, $authors: [String]) {
    saveBook(description: $description, bookId: $bookId, image: $image, title: $title, authors: $authors) {
      _id
      username
      email
      savedBooks {
        _id
        description
        bookId
        image
        title
        authors
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation Mutation($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        _id
        description
        bookId
        image
        title
        authors
      }
    }
  }
`;