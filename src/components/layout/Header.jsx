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

const navData = [
  { id: 1, to: '/', title: 'Home' },
  { id: 2, to: '/books', title: 'Books' },
  { id: 5, to: '/books/new', title: 'Add Book' },
  { id: 3, to: '/about', title: 'About' },
  { id: 4, to: '/contacts', title: 'Contacts' },
];

function Header() {
  return (
    <header className="container">
      <Nav>
        {navData.map(({ id, to, title }) => (
          <SiteLink end key={id} to={to}>
            {title}
          </SiteLink>
        ))}
      </Nav>
    </header>
  );
}

export default Header;
