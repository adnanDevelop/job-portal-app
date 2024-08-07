import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
// import authApi from "./services/authApi";

import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // Apis
    // [authApi.reducerPath]: authApi.reducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
