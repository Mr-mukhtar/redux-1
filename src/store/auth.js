import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});


export const authActions = authSlice.actions;

export default authSlice.reducer;
