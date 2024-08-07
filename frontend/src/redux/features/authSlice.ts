import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie } from "../../utils/cookie";

interface IAuthState {
  user: any;
  loading: boolean;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  user: null,
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
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeCookie("token");
      localStorage.removeItem("userData");
    },
  },
});

export const { setLoading, setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;
