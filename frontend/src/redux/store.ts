import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./slices/jobSlice";
import authSlice from "./slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import jobApi from "./features/jobApi";
import authApi from "./services/authApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobsSlice: jobSlice,
    // Apis
    [authApi.reducerPath]: authApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, jobApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
