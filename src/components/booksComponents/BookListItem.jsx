import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 1.5em;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Year = styled.p`
  font-weight: bold;
`;

function BookListItem({ item }) {
  return (
    <Li>
      <Title>{item.title}</Title>
      <Year>{item.year}</Year>
    </Li>
  );
}

export default BookListItem;
