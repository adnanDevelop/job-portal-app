import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/company",
    credentials: "include",
  }),
  tagTypes: ["company"],
  endpoints: (builder) => ({
    // Register company
    registerCompany: builder.mutation({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["company"],
    }),

    // Update company
    updateCompany: builder.mutation({
      query: (payload) => ({
        url: `/update/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: ["company"],
    }),

    // Delete company
    deleteCompany: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["company"],
    }),

    // List companies
    listCompanies: builder.query({
      query: (payload) => ({
        url: "/get",
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["company"],
    }),

    // Get company by id
    getCompanyById: builder.query({
      query: (payload) => ({
        url: `/get/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["company"],
    }),
  }),
});

export const {
  useRegisterCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useListCompaniesQuery,
  useGetCompanyByIdQuery,
} = companyApi;

export default companyApi;
