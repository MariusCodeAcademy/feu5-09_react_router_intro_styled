import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';

function NewBookForm({ onNewBook }) {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '1984',
      genre: '',
      category: '',
    },
    onSubmit: (values) => {
      // console.log('submit', values);
      onNewBook(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={formik.values.year}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option value="">Select a category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default NewBookForm;
