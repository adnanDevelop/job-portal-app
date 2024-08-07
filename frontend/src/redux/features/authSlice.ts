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
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeCookie("token");
    },
  },
});

export const { setLoading, login, logout } = authSlice.actions;
export default authSlice.reducer;
