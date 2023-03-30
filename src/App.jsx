import './styles/reset.css';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import BooksPage from './pages/BooksPage';
import SingleBookPage from './pages/SingleBookPage';

function App() {
  // padaryti kad /books adresas parodytu BooksList.jsx komponenta
  // padaryti kad /books/1 adresas parodytu SingleBookPage.jsx komponenta
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<SingleBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
