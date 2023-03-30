import './styles/reset.css';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactPage';

function App() {
  return (
    <div className="">
      <HomePage />
      <AboutPage />
      <ContactsPage />
    </div>
  );
}
export default App;
