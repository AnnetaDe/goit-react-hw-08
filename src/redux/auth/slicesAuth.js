import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: null,
  isLoggedIn: false,
  error: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectUserName: state => state.user.name,
    selectToken: state => state.token,
    selectIsLoggedIn: state => state.isLoggedIn,
  },
});

export const authReducer = slice.reducer;
