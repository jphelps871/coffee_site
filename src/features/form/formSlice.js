import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const createUser = createAsyncThunk(
  'form/signUpReducer',
  async (userCredentials, { rejectWithValue }) => {
    const userCredentialsJson = JSON.stringify(userCredentials);
    try {
      const response = await client.register(userCredentialsJson);
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
    status: '',
    success: {},
    error: [],
  },

  reducers: {},

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

export const { signUpReducer, loginReducer } = formSlice.actions;

export default formSlice.reducer;
