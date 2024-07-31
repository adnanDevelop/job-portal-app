import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL to request backend
const baseUrl = "http://localhost:3000/auth/api";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["user"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/get-data",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getLoggedInUser: builder.query({
      query: () => ({
        url: "/get-user",
        method: "GET",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/user`,
        method: "GET",
        params: { id },
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/update-user`,
        method: "PUT",
        body: body,
        params: { id },
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/delete-user",
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserByIdQuery,
  useGetLoggedInUserQuery,
  useGetAllUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = authApi;
export default authApi;