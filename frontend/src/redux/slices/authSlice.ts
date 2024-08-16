import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";

const initialState = {
  user: JSON.parse(getCookie("userData") || "{}"),
  loading: false,
  isAuthenticated: !!getCookie("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      setCookie("userData", JSON.stringify(action.payload));
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      setCookie("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeCookie("token");
      removeCookie("userData");
    },
  },
});

export const { setLoading, setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;
