import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './nav.scss';

export default function Nav() {
  const [active, setActive] = useState('/');

  const { loggedIn } = useSelector((state) => state.auth);

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
          {loggedIn ? (
            <Link style={test('/account')} to="/account">
              my account
            </Link>
          ) : (
            <Link style={test('/login')} to="/login">
              login
            </Link>
          )}
        </li>

        <li onClick={(e) => handleClick(e)}>
          <Link style={test('/signup')} to="/signup">
            sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
