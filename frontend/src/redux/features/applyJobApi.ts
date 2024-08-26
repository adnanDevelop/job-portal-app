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
    updateJobStatus: builder.mutation({
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
    listApplicantData: builder.query({
      query: (payload) => ({
        url: `/applicant/${payload.id}`,
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
  useListApplicantDataQuery,
  useUpdateJobStatusMutation,
  useDeleteApplicationMutation,
  useListAllApplicationDataQuery,
} = applyJobApi;

export default applyJobApi;
