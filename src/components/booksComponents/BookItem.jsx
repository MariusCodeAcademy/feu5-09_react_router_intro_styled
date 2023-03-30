import React from 'react';
import styled from 'styled-components';

const ListItem = styled.article`
  margin-bottom: 1rem;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-style: italic;
  margin-bottom: 0.25rem;
`;

const Year = styled.p`
  font-weight: bold;
`;

function BookItem({ book }) {
  return (
    <ListItem>
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
      <Year>Year: {book.year}</Year>
      <p>Genre: {book.genre}</p>
      <p>Category: {book.category}</p>
    </ListItem>
  );
}

export default BookItem;
