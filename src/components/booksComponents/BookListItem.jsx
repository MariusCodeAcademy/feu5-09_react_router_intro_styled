import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 1.5em;
  border-radius: 4px;
  background-color: ${(props) => props.bg || 'transparent'};
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
    Fantasy: '#dde0ab',
    Fiction: '#97cba9',
    Reality: '#668ba4',
  };

  // item.category === 'Fiction'
  //                              'Fiction'
  const currentColor = catColors[item.category];
  // console.log('currentColor ===', currentColor);
  return (
    <Li bg={currentColor}>
      <Link to={`/books/${item.id}`}>
        <Title>{item.title}</Title>
        <Year>{item.year}</Year>
        <Category>Category: {item.category}</Category>
      </Link>
    </Li>
  );
}

export default BookListItem;
