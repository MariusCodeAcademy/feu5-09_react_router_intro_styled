import styled from 'styled-components';
import { bookData } from '../assets/db';
import BookListItem from '../components/booksComponents/BookListItem';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

function BooksPage() {
  // sugeneruoti BookItems is bookData masyvo
  // atvaizduoti tik title ir metus
  return (
    <div className="container page">
      <h1>BooksPage</h1>
      <p>Here are our books</p>

      <List>
        {bookData.map((bObj) => (
          <BookListItem key={bObj.id} item={bObj} />
        ))}
      </List>
    </div>
  );
}

export default BooksPage;
