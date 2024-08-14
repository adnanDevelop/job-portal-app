import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsData: [],
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    storeJobs: (state, action) => {
      state.jobsData = action.payload;
    },
  },
});

export const { setLoading, storeJobs } = authSlice.actions;
export default authSlice.reducer;
