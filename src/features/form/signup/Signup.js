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
      <Input name="email" onInputChange={(e) => handleInputChange(e)} />
      <Input name="password" onInputChange={(e) => handleInputChange(e)} />
      <Input name="firstName" onInputChange={(e) => handleInputChange(e)} />
      <Input name="lastName" onInputChange={(e) => handleInputChange(e)} />
      <input
        onClick={() => dispatch(createUser(user))}
        type="submit"
        value="Submit"
      />
    </form>
  );
}
