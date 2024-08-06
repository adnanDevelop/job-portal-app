import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie } from "../../utils/cookie";

interface IAuthState {
  isAuthenticated: boolean;
  user: any;
}

const initialState: IAuthState = {
  isAuthenticated: !!getCookie("token"),
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user || "";
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      removeCookie("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
