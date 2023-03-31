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
      email: '',
      category: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Maziausiai 3 raides')
        .max(50, 'Daugiausiai 10')
        .required('Butinas laukas'),
      author: Yup.string()
        .min(3, 'Maziausiai 3 raides')
        .max(50, 'Daugiausiai 10')
        .required('Butinas laukas'),
      year: Yup.number().positive().moreThan(1000).max(2023).required(),
      email: Yup.string()
        .email('Patikrinkite emaila')
        .required('Butinas laukas'),
    }),
    onSubmit: (values) => {
      // console.log('submit', values);
      onNewBook(values);
    },
  });
  // console.log('formik.errors', formik.errors);
  // console.log('formik.touched', formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formik.values.title}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.title && formik.errors.title && (
          <ErrorMsg>{formik.errors.title}</ErrorMsg>
        )}
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={formik.values.author}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.author && formik.errors.author && (
          <ErrorMsg>{formik.errors.author}</ErrorMsg>
        )}
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={formik.values.year}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.year && formik.errors.year && (
          <ErrorMsg>{formik.errors.year}</ErrorMsg>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMsg>{formik.errors.email}</ErrorMsg>
        )}
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
