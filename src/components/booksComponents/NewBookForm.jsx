import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const ErrorMsg = styled.p`
  font-size: 1.5rem;
  color: tomato;
`;

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
        .min(3, 'Maziausiai 3 raides')
        .max(10, 'Daugiausiai 10')
        .required('Butinas laukas'),
      author: Yup.string()
        .min(3, 'Maziausiai 3 raides')
        .max(10, 'Daugiausiai 10')
        .required('Butinas laukas'),
      year: Yup.number().positive().moreThan(1000).max(2023).required(),
      genre: Yup.string()
        .min(3, 'Maziausiai 3 raides')
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
        {formik.errors.title && <ErrorMsg>{formik.errors.title}</ErrorMsg>}
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        {formik.errors.author && <ErrorMsg>{formik.errors.author}</ErrorMsg>}
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={formik.values.year}
          onChange={formik.handleChange}
        />
        {formik.errors.year && <ErrorMsg>{formik.errors.year}</ErrorMsg>}
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
        />
        {formik.errors.genre && <ErrorMsg>{formik.errors.genre}</ErrorMsg>}
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
