import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/user",
    credentials: "include",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    // GET all users
    getAllUsers: builder.query({
      query: (payload) => ({
        url: "/all",
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["users"],
    }),

    // Get user by id
    getUserById: builder.query({
      query: (payload) => ({
        url: `/single-user/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userApi;

export default userApi;
