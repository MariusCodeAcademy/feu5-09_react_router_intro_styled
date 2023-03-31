import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function NewBookForm({ onNewBook }) {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '1984',
      genre: '',
      category: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Maziausiai 3 raides pleazz')
        .max(10, 'Daugiausiai 10')
        .required('Butinas laukas'),
    }),
    onSubmit: (values) => {
      // console.log('submit', values);
      onNewBook(values);
    },
  });
  console.log('formik.errors', formik.errors);
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
        {formik.errors.title && <p>{formik.errors.title}</p>}
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
