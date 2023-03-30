import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container page">
      <h1>Ups 404 NotFound</h1>
      <p>This page was not found</p>
      <Link to="/">Try go to home page</Link>
    </div>
  );
}

export default NotFound;
