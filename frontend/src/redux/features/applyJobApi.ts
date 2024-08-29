import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const applyJobApi = createApi({
  reducerPath: "applyJobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/application",
    credentials: "include",
  }),
  tagTypes: ["applications"],
  endpoints: (builder) => ({
    // Apply for job
    applyJob: builder.mutation({
      query: (payload) => ({
        url: `/apply/${payload.id}`,
        method: "POST",
      }),
      invalidatesTags: ["applications"],
    }),

    // Update job status
    updateApplicationStatus: builder.mutation({
      query: (payload) => ({
        url: `/update/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: ["applications"],
    }),

    // Delete job application
    deleteApplication: builder.mutation({
      query: (payload) => ({
        url: `/delete/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["applications"],
    }),

    // GET all applied jobs
    listAllApplyJobs: builder.query({
      query: () => ({
        url: "/getjob",
        method: "GET",
      }),
      providesTags: ["applications"],
    }),

    // Get all applications
    listApplicationById: builder.query({
      query: (payload) => ({
        url: `/get-applicant/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["applications"],
    }),

    // Get all applications data
    listAllApplicationData: builder.query({
      query: (payload) => ({
        url: `/get-all-jobs`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["applications"],
    }),
  }),
});

export const {
  useApplyJobMutation,
  useListAllApplyJobsQuery,
  useListApplicationByIdQuery,
  useDeleteApplicationMutation,
  useListAllApplicationDataQuery,
  useUpdateApplicationStatusMutation,
} = applyJobApi;

export default applyJobApi;
