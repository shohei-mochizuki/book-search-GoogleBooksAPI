import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

// Import useMutation from @apollo/client
// import { useMutation, useQuery } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client';

// Import queries and mutations from '../utils/queries';
import { GET_ME } from '../utils/queries';
import { DELETE_BOOK } from '../utils/mutations';

// DELETE LATER // import { getMe, deleteBook } from '../utils/API';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  const [userData, setUserData] = useState({});

  const [deleteBook, { error }] = useMutation(DELETE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteBook({
        variables: { bookId: bookId}})
    
      setUserData(data.deleteBook);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
      // window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
  };

  const { loading, data } = useQuery(GET_ME, {
    variables: {},
  });

  console.log(loading)
  console.log(data)

  useEffect(()=>{
    setUserData(data?.me);
  },[loading])

  if (loading) {
    return <div>Loading...</div>;
  };

  console.log(userData);
  
  if (!userData) {
    return <div>Loading...</div>;
  };

  if (Object.keys(userData).length === 0) {
    return <div>Loading...</div>;
  } else {

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedBooks.map((book) => {
            return (
              <Col md="4">
                <Card key={book.bookId} border='dark'>
                  {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
        };
};

export default SavedBooks;
