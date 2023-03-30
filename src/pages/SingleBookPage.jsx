import React from 'react';
import { useParams } from 'react-router-dom';
import { bookData } from '../assets/db';

function SingleBookPage() {
  const params = useParams();
  console.log('params ===', params);
  // pasiimti knygos id is books data
  // sugeneruoti atitinkama knyga
  console.log('bookData ===', bookData);
  // surasti bookData konkretu book objekta pagal bookId

  // sugeneruoti visa jo informacija su stilium jsx

  return (
    <div className="container page">
      <h1>SingleBookPage</h1>
    </div>
  );
}

export default SingleBookPage;
