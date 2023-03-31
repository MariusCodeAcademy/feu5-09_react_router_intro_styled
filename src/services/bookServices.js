const BOOKS_KEY = 'books';

function getBooks() {
  const booksString = localStorage.getItem(BOOKS_KEY);
  return booksString ? JSON.parse(booksString) : [];
}

function saveBooks(books) {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
}

function createBook(book) {
  const books = getBooks();
  const newBook = { id: Date.now(), ...book };
  books.push(newBook);
  saveBooks(books);
  return newBook;
}

function getBookById(id) {
  const books = getBooks();
  return books.find((book) => book.id === id);
}

function updateBook(id, updates) {
  const books = getBooks();
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return null;
  }
  const updatedBook = { ...books[bookIndex], ...updates };
  books[bookIndex] = updatedBook;
  saveBooks(books);
  return updatedBook;
}

function deleteBook(id) {
  const books = getBooks();
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return null;
  }
  const deletedBook = books[index];
  books.splice(index, 1);
  saveBooks(books);
  return deletedBook;
}

export { getBooks, createBook, getBookById, updateBook, deleteBook };
