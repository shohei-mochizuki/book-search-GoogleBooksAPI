// Import libraries
import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';

// Import functions from utils;
import { GET_ME } from '../utils/queries';
import { DELETE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  // Set state for the logined user  
  const [userData, setUserData] = useState({});

  // Set mutation
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
    } catch (err) {
      console.error(err);
    }
  };

  // Get logined user data using query
  const { loading, data } = useQuery(GET_ME, {
    variables: {},
  });

  // Everytime 'loading' is updated, try to get user data by the query GET_ME and update userData
  useEffect(()=>{
    setUserData(data?.me);
  },[loading])

  // If 'loading' is still true, render "Loading..." message
  if (loading) {
    return <div>Loading...</div>;
  };

  // If userData hasn't been updated (= hasn't got the queried data), render "Loading..." message
  if (!userData) {
    return <div>Loading...</div>;
  };

  // If userData has been updated but the data inside is nothing, render "Loading..." message
  if (Object.keys(userData).length === 0) {
    return <div>Loading...</div>;
  } else {
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
