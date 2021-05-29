import '../forms.scss';
import Input from '../../../common/Input';
import React, { useState } from 'react';
import { useDispatch /* useSelector */ } from 'react-redux';
import { createUser } from '../formSlice';

export default function SignUp() {
  const dispatch = useDispatch();
  // const { status, error, success } = useSelector((state) => state.form);

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
      <button onClick={() => dispatch(createUser(user))} type="submit">
        Sign Up
      </button>
      <p>
        If you already have an account <a>login here</a>{' '}
      </p>
    </form>
  );
}
