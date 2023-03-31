import React from 'react';
import NewBookForm from '../components/booksComponents/NewBookForm';

function NewBookPage() {
  //
  function handleNewBook() {
    // gauto book objekta
    console.log('new book object');
  }

  return (
    <div className="container page">
      <h1>NewBookPage</h1>
      <p>Welcome to NewBookPage page</p>
      <NewBookForm />
    </div>
  );
}

export default NewBookPage;
