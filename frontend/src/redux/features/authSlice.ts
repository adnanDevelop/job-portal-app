import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
