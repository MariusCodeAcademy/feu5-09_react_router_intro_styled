import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 1.5em;
  border-radius: 4px;
  background-color: transparent;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Year = styled.p`
  font-weight: bold;
`;
const Category = styled.p`
  font-style: italic;
  float: right;
`;

function BookListItem({ item }) {
  const catColors = {
    Fantasy: 'tomato',
    Fiction: 'blue',
    Reality: 'green',
  };

  // item.category === 'Fiction'

  const currentColor = '';

  return (
    <Li>
      <Link to={`/books/${item.id}`}>
        <Title>{item.title}</Title>
        <Year>{item.year}</Year>
        <Category>Category: {item.category}</Category>
      </Link>
    </Li>
  );
}

export default BookListItem;
