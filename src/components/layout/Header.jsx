import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  background-color: #333;
  color: #fff;
`;

const SiteLink = styled(NavLink)`
  display: block;
  padding: 0.5em 1em;
  background-color: #333;

  &:hover {
    background-color: #aeaeae;
  }

  &.active {
    text-decoration: underline;
    background-color: tomato;
  }
`;

function Header() {
  return (
    <header className="container">
      <Nav>
        <SiteLink to="/" className="navLink">
          Home
        </SiteLink>
        <SiteLink to="/about" className="navLink">
          About
        </SiteLink>
        <SiteLink to="/contacts" className="navLink">
          Contacts
        </SiteLink>
      </Nav>
    </header>
  );
}

export default Header;
