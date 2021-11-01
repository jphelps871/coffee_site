import { auth } from '../api/auth';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const authRequest = createAsyncThunk(
  'auth/authReducer',
  async (data, { rejectWithValue }) => {
    try {
      const response = await auth.loggedIn();
      if (!response.ok) throw response;

      return 'Logged in';
    } catch (error) {
      const err = await error.json();
      return rejectWithValue(err[0].msg);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (data, { rejectWithValue }) => {
  const response = await auth.logout();
  const jsonData = await response.json();
  if (jsonData.status !== 200) return rejectWithValue(jsonData.message);
  return jsonData.message;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    message: '',
  },

  reducers: {},

  extraReducers: (builder) => {
    /* For authorization of app */
    builder.addCase(authRequest.fulfilled, (state) => {
      state.loggedIn = true;
    });

    builder.addCase(authRequest.rejected, (state, action) => {
      state.loggedIn = false;
      state.message = action.payload;
    });

    /* Logout */
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loggedIn = false;
      state.message = action.payload;
    });
  },
});

export default authSlice.reducer;
