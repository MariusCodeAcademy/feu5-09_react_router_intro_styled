import { Link } from 'react-router-dom';
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

const a = '5';

function BookListItem({ item }) {
  return (
    <Li>
      <Link to={`/books/${item.id}`}>
        <Title>{item.title}</Title>
        <Year>{item.year}</Year>
      </Link>
    </Li>
  );
}

export default BookListItem;
