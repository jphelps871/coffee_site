import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/form/login/loginSlice';
import signupSlice from '../features/form/signup/signupSlice';
import authSlice from '../reducers/authSlice';

export default configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
    auth: authSlice,
  },
});
