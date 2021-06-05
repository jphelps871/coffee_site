import '../forms.scss';
import Input from '../../../common/Input';
import Loader from '../../../common/Loader';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './loginSlice';

export default function Login() {
  const dispatch = useDispatch();
  const { status, error, success } = useSelector((state) => state.login);

  const handleInputChange = (target) =>
    setUser({ ...user, [target.name]: target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  if (success) return <h2>Successful login</h2>;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <article>
        <h2>Login</h2>
        <p>Welcome back! Please login with your email and password</p>
      </article>
      <Input
        server={{ status, error }}
        type={{ name: 'email', display: 'email' }}
        onInputChange={(e) => handleInputChange(e)}
      />
      <Input
        server={{ status, error }}
        type={{ name: 'password', display: 'password' }}
        onInputChange={(e) => handleInputChange(e)}
      />
      <button
        onClick={() => dispatch(loginUser(user))}
        type="submit"
        style={
          status === 'loading' ? { pointerEvents: 'none', opacity: '0.4' } : {}
        }
      >
        Login {status === 'loading' ? <Loader /> : ''}
      </button>
    </form>
  );
}
