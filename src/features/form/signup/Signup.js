import '../forms.scss';
import Input from '../../../common/Input';
import Loader from '../../../common/Loader';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../formSlice';

export default function SignUp() {
  const dispatch = useDispatch();
  const { success, status } = useSelector((state) => state.form);

  const [user, setUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (target) =>
    setUser({ ...user, [target.name]: target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (success) return <h2 className="wrapper">Success</h2>;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <article>
        <h2>Create Account</h2>
        <p>
          Please register with a valid email and password. Along with your first
          and last name
        </p>
      </article>
      <Input
        name="email"
        display="email"
        onInputChange={(e) => handleInputChange(e)}
      />
      <Input
        name="password"
        display="password"
        onInputChange={(e) => handleInputChange(e)}
      />
      <Input
        name="firstName"
        display="first name"
        onInputChange={(e) => handleInputChange(e)}
      />
      <Input
        name="lastName"
        display="last name"
        onInputChange={(e) => handleInputChange(e)}
      />
      <button
        onClick={() => dispatch(createUser(user))}
        type="submit"
        style={
          status === 'loading' ? { pointerEvents: 'none', opacity: '0.4' } : {}
        }
      >
        Sign Up {status === 'loading' ? <Loader /> : ''}
      </button>
      <p>If you already have an account 'login here'</p>
    </form>
  );
}
