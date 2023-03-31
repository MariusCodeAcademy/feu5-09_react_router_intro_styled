import React from 'react';
import NewBookForm from '../components/booksComponents/NewBookForm';

function NewBookPage() {
  //
  function handleNewBook(bookObj) {
    // gauto book objekta
    console.log('new book object', bookObj);
    // panaudoti createBook() ir irasyti knyga
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
