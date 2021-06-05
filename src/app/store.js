import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/form/login/loginSlice';
import signupSlice from '../features/form/signup/signupSlice';

export default configureStore({
  reducer: {
    signup: signupSlice,
    login: loginReducer,
  },
});
