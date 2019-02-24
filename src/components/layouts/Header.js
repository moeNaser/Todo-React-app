import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    color: 'white',
    background: 'black',
    margin: '0'
  };
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '6px',
    display: 'inline-block'
  };
  return (
    <header style={headerStyle}>
      <h2 className="header-title">ToDo List</h2>
      <div>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        |
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
