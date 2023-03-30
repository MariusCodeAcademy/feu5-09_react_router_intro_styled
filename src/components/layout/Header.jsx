import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  background-color: #333;
  color: #fff;
  .navLink {
    display: block;
    padding: 0.5em 1em;
    background-color: #333;
  }
`;

function Header() {
  return (
    <header className="container">
      <Nav>
        <a href="/" className="navLink">
          Home
        </a>
        <a href="/about" className="navLink">
          About
        </a>
        <a href="/contacts" className="navLink">
          Contacts
        </a>
      </Nav>
    </header>
  );
}

export default Header;
