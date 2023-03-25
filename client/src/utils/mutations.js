import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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
  mutation saveBook($description: String!, $bookId: String!, $image: String, $link: String, $authors: [String]) {
    addComment(description: $description, bookId: $bookId, image: $image, link: $link, authors: $authors) {
      _id
      username
      email
      savedBooks {
        _id
        description
        bookId
        image
        link
        authors
      }
    }
  }
`;
