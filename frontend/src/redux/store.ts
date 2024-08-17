import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./slices/jobSlice";
import authSlice from "./slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

// Apis
import jobApi from "./features/jobApi";
import userApi from "./features/userApi";
import applyJobApi from "./features/applyJobApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobsSlice: jobSlice,
    // Apis
    [jobApi.reducerPath]: jobApi.reducer,
    [applyJobApi.reducerPath]: applyJobApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobApi.middleware,
      applyJobApi.middleware,
      userApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
