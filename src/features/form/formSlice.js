import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const createUser = createAsyncThunk(
  'form/signUpReducer',
  async (userCredentials, { rejectWithValue }) => {
    const url = 'https://fast-lake-76721.herokuapp.com/api/user/register';
    const userCredentialsJson = JSON.stringify(userCredentials);
    try {
      const response = await client.post(url, userCredentialsJson);
      const json = await response.json();

      if (json.errors) throw json.errors;

      return json.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    response: {},
    status: '',
    error: {},
  },

  reducers: {
    signUpReducer: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.status = 'loading';
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.response = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const selectUserValue = (state) => state.form.response;

export const { signUpReducer, loginReducer } = formSlice.actions;

export default formSlice.reducer;
