import React from 'react';
import { useParams } from 'react-router-dom';

function SingleBookPage() {
  const params = useParams();
  console.log('params ===', params);
  // pasiimti knygos id is books data
  // sugeneruoti atitinkama knyga
  return (
    <div className="container page">
      <h1>SingleBookPage</h1>
    </div>
  );
}

export default SingleBookPage;
