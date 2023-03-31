import React from 'react';
import NewBookForm from '../components/booksComponents/NewBookForm';
import { createBook } from '../services/bookServices';

function NewBookPage() {
  //
  function handleNewBook(bookObj) {
    // gauto book objekta
    console.log('new book object', bookObj);
    // panaudoti createBook() ir irasyti knyga
    createBook(bookObj);

    // irase naviguoti i /books page (useNavigate)
  }

  return (
    <div className="container page">
      <h1>NewBookPage</h1>
      <p>Welcome to NewBookPage page</p>
      <NewBookForm onNewBook={handleNewBook} />
    </div>
  );
}

export default NewBookPage;
