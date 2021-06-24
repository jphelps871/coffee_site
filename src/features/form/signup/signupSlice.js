import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../../api/auth';

export const createUser = createAsyncThunk(
  'form/signUpReducer',
  async (userCredentials, { rejectWithValue }) => {
    const userCredentialsJson = JSON.stringify(userCredentials);
    try {
      const response = await auth.register(userCredentialsJson);

      if (!response.ok) throw response;

      const json = await response.json();
      return json;
    } catch (error) {
      const message = await error.json();
      return rejectWithValue(message);
    }
  },
);

const formSlice = createSlice({
  name: 'form',
  initialState: {
    status: '',
    success: '',
    error: [],
  },

  reducers: {},

  extraReducers: {
    [createUser.pending]: (state) => {
      state.status = 'loading';
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.success = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default formSlice.reducer;
