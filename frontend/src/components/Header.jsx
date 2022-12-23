import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="brand" src="/images/logo_white.png" alt="amazon" />
      </Link>
    </header>
  );
};

export default Header;
