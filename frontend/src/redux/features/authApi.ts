import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/user",
    credentials: "include",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    // Register User
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        params: payload.params,
      }),
    }),

    // Login User
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload.body,
      }),
    }),

    // Logout User
    logoutUser: builder.query({
      query: () => ({
        url: `/logout`,
        method: "Get",
        // body: payload.body,
      }),
    }),
  }),
});

export const {
  useLogoutUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = authApi;

export default authApi;
