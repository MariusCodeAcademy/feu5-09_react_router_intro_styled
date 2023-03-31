import React from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import BookItem from '../components/booksComponents/BookItem';
import { getBooks } from '../services/bookServices';

function SingleBookPage() {
  const books = getBooks();
  const navigate = useNavigate();
  const { bookId } = useParams();
  console.log('bookId ===', bookId);
  // pasiimti knygos id is books data
  // sugeneruoti atitinkama knyga
  console.log('books ===', books);
  // surasti bookData konkretu book objekta pagal bookId
  const foundBookObj = books.find((bObj) => +bObj.id === +bookId);
  // ar radom ?
  if (foundBookObj) {
    console.log('radom foundBookObj ===', foundBookObj);
  } else {
    console.log('neradom');
    // nunaviguoti programiskai i not found
    return <Navigate to="/not-found" />;
  }
  // sugeneruoti visa jo informacija su stilium jsx

  function goBackHandler() {
    navigate('/books');
  }

  return (
    <div className="container page">
      <h1>SingleBookPage</h1>
      <BookItem book={foundBookObj} />
      <button onClick={goBackHandler}>Go back</button>
      <Link to={'/books'}>&lt;&lt; Go back</Link>
    </div>
  );
}

export default SingleBookPage;
