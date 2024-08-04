import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      // state.token = action.payload.token;
      // localStorage.setItem("foodAppToken", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      // state.token = null;
      // localStorage.removeItem("foodAppToken");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
