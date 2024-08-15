import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const applyJobApi = createApi({
  reducerPath: "applyJobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/application",
    credentials: "include",
  }),

  tagTypes: ["applications"],

  // DELETE /delete/:id
  endpoints: (builder) => ({
    // GET /get
    applyJob: builder.query({
      query: (payload) => ({
        url: `/apply/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["applications"],
    }),

    // GET all applied jobs
    listAllApplyJobs: builder.query({
      query: () => ({
        url: "/getjob",
        method: "GET",
      }),
      providesTags: ["applications"],
    }),

    // GET /get/:id
    listApplicantData: builder.query({
      query: (payload) => ({
        url: `/${payload.id}/applicant`,
        method: "GET",
      }),
      providesTags: ["applications"],
    }),

    // Update job status
    updateJobStatus: builder.mutation({
      query: (payload) => ({
        url: `/${payload.id}/update`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: ["applications"],
    }),

    // Delete job application
    deleteApplication: builder.mutation({
      query: (payload) => ({
        url: `/${payload.id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["applications"],
    }),
  }),
});

export const {
  useApplyJobQuery,
  useListAllApplyJobsQuery,
  useListApplicantDataQuery,
  useUpdateJobStatusMutation,
  useDeleteApplicationMutation,
} = applyJobApi;

export default applyJobApi;
