import './styles/reset.css';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import BooksPage from './pages/BooksPage';
import SingleBookPage from './pages/SingleBookPage';
import NewBookPage from './pages/NewBookPage';
import BooksPageLayout from './pages/BooksPageLayout';

function App() {
  // padaryti kad /books adresas parodytu BooksList.jsx komponenta
  // padaryti kad /books/1 adresas parodytu SingleBookPage.jsx komponenta
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/books" element={<BooksPageLayout />}>
          <Route path=":bookId" element={<SingleBookPage />} />
          <Route path="new" element={<NewBookPage />} />
        </Route>
        <Route path="/books-old" element={<BooksPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
