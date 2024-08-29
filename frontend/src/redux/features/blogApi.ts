import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/blog",
    credentials: "include",
  }),
  tagTypes: ["blogApi"],
  endpoints: (builder) => ({
    // Create blog endpoint
    createBlog: builder.mutation({
      query: (payload) => ({
        url: `/create-blog`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["blogApi"],
    }),

    // Update blog endpoint
    updateBlog: builder.mutation({
      query: (payload) => ({
        url: `/update-blog/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: ["blogApi"],
    }),

    updateBlogViews: builder.mutation({
      query: (payload) => ({
        url: `/update-blog-views/${payload.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: ["blogApi"],
    }),

    // Delete blog endpoint
    deleteBlog: builder.mutation({
      query: (payload) => ({
        url: `/delete-blog/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogApi"],
    }),

    // Get blog endpoint
    listBlogs: builder.query({
      query: () => ({
        url: "/get-blog",
        method: "GET",
      }),
      providesTags: ["blogApi"],
    }),

    // Get blog by Id endpoint
    getBlogById: builder.query({
      query: (payload) => ({
        url: `/get-blog/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["blogApi"],
    }),
  }),
});

export const {
  useListBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;

export default blogApi;
