import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './nav.scss';

import { logout } from '../../../reducers/authSlice';

export default function Nav() {
  /* Set links to active when use is oon the page */
  const [active, setActive] = useState('/');

  /* Turn link active */
  const handleClick = (e) => setActive(e.target.getAttribute('href'));

  const test = (link) =>
    active === link ? { fontWeight: '800' } : { fontWeight: 'inherit' };

  /* Give and take user authorization  */
  const { loggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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

        {loggedIn ? (
          <li>
            <a onClick={() => dispatch(logout())}>logout</a>
          </li>
        ) : (
          <li onClick={(e) => handleClick(e)}>
            <Link style={test('/signup')} to="/signup">
              sign up
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
