import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./slices/jobSlice";
import authSlice from "./slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

// Apis
import jobApi from "./features/jobApi";
import authApi from "./services/authApi";
import applyJobApi from "./features/applyJobApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobsSlice: jobSlice,
    // Apis
    [authApi.reducerPath]: authApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [applyJobApi.reducerPath]: applyJobApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      jobApi.middleware,
      applyJobApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
