import styled from 'styled-components';
import { bookData } from '../assets/db';
import BookListItem from '../components/booksComponents/BookListItem';
import { useState } from 'react';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

// Todo: bookData.reduce - visas skirtingas kategorijas

const selectOpt = [
  { value: 'all', text: 'Show all' },
  { value: 'Fantasy', text: 'Fantasy' },
  { value: 'Fiction', text: 'Fiction' },
  { value: 'Reality', text: 'Reality' },
];

function BooksPage() {
  const [selectValue, setSelectValue] = useState('Reality');
  // state saugom filtro reiksme
  function handleSelect(e) {
    console.log('handleSelect');
    setSelectValue(e.target.value);
  }
  // pagal state issfiltruojam ir atvaizduojam tik tos kategorijos knygas
  let filteredBooks = bookData.filter((bObj) => bObj.category === selectValue);

  if (selectValue === 'all') {
    filteredBooks = bookData;
  }
  // priskirti kiekvienai kategorijai bg color ir sarase turetu matytis spalvos
  return (
    <div className="container page">
      <h1>BooksPage</h1>
      <p>Here are our books --{selectValue}--</p>
      <select value={selectValue} onChange={handleSelect}>
        {selectOpt.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <List>
        {filteredBooks.map((bObj) => (
          <BookListItem key={bObj.id} item={bObj} />
        ))}
      </List>
    </div>
  );
}

export default BooksPage;
