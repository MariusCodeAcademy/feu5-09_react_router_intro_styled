import styled from 'styled-components';
import BookListItem from '../components/booksComponents/BookListItem';

const bookData = [
  {
    id: 1,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Bildungsroman',
    category: 'Fiction',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Southern Gothic',
    category: 'Fiction',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian Fiction',
    category: 'Fiction',
  },
  {
    id: 4,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    category: 'Fiction',
  },
  {
    id: 5,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical Fiction',
    category: 'Fiction',
  },
  {
    id: 6,
    title: 'The Republic',
    author: 'Plato',
    year: -380,
    genre: 'Philosophy',
    category: 'Non-fiction',
  },
  {
    id: 7,
    title: 'The Origin of Species',
    author: 'Charles Darwin',
    year: 1859,
    genre: 'Science',
    category: 'Non-fiction',
  },
];

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
