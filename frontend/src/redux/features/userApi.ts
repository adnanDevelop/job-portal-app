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

    // Update User
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `/profile/update`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["users"],
    }),

    // Delete User
    deleteUser: builder.mutation({
      query: (payload) => ({
        url: `/delete/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
