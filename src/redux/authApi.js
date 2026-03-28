import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Backend URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "/api/v1/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    onboarding: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/onboarding",
        method: "PUT",
        body: data,
      }),
    }),

    getProfile: builder.query({
      query: () => "/api/v1/auth/me",
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useOnboardingMutation,
  useGetProfileQuery,
} = authApi;
