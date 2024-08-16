import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/job",
    credentials: "include",
  }),
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    // POST /post
    createJob: builder.mutation({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["Job"],
    }),

    // PUT /update/:id
    updateJob: builder.mutation({
      query: (payload) => ({
        url: `/update/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: ["Job"],
    }),

    // DELETE /delete/:id
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job"],
    }),

    // GET /get
    listJobs: builder.query({
      query: () => ({
        url: "/get",
        method: "GET",
      }),
      providesTags: ["Job"],
    }),

    // GET /getadminjobs
    listJobsByAdmin: builder.query({
      query: () => ({
        url: "/getadminjobs",
        method: "GET",
      }),
      providesTags: ["Job"],
    }),

    // GET /get/:id
    getJobById: builder.query({
      query: (payload) => ({
        url: `/get/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["Job"],
    }),
  }),
});

export const {
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useListJobsQuery,
  useListJobsByAdminQuery,
  useGetJobByIdQuery,
} = jobApi;

export default jobApi;
