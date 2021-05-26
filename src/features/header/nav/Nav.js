import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
  const [active, setActive] = useState('/');

  const handleClick = (e) => setActive(e.target.getAttribute('href'));

  const test = (link) =>
    active === link ? { fontWeight: '800' } : { fontWeight: 'inherit' };

  return (
    <nav>
      <ul>
        <li onClick={(e) => handleClick(e)} className="home">
          <Link style={test('/')} to="/">
            home
          </Link>
        </li>

        <li onClick={(e) => handleClick(e)}>
          <Link style={test('/signup')} to="/signup">
            sign up
          </Link>
        </li>

        <li onClick={(e) => handleClick(e)}>
          <Link style={test('/login')} to="/login">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
