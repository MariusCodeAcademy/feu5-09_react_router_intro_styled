import React from 'react';

function Header() {
  return (
    <header className="container">
      <nav>
        <a href="/" className="navLink">
          Home
        </a>
        <a href="/about" className="navLink">
          About
        </a>
        <a href="/contacts" className="navLink">
          Contacts
        </a>
      </nav>
    </header>
  );
}

export default Header;
