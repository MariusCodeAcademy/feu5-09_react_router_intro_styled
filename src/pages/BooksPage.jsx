import styled from 'styled-components';
import { bookData } from '../assets/db';
import BookListItem from '../components/booksComponents/BookListItem';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

function BooksPage() {
  // state saugom filtro reiksme
  // pagal state issfiltruojam ir atvaizduojam tik tos kategorijos knygas
  // priskirti kiekvienai kategorijai bg color ir sarase turetu matytis spalvos
  return (
    <div className="container page">
      <h1>BooksPage</h1>
      <p>Here are our books</p>
      <select>
        <option value="all">Show all</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Fiction">Fiction</option>
      </select>
      <List>
        {bookData.map((bObj) => (
          <BookListItem key={bObj.id} item={bObj} />
        ))}
      </List>
    </div>
  );
}

export default BooksPage;
