import jobSlice from "./slices/jobSlice";
import authSlice from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Apis
import jobApi from "./features/jobApi";
import userApi from "./features/userApi";
import blogApi from "./features/blogApi";
import companyApi from "./features/companyApi";
import applyJobApi from "./features/applyJobApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobsSlice: jobSlice,
    // Apis
    [jobApi.reducerPath]: jobApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [applyJobApi.reducerPath]: applyJobApi.reducer,
  },

  // Middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobApi.middleware,
      userApi.middleware,
      blogApi.middleware,
      companyApi.middleware,
      applyJobApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
