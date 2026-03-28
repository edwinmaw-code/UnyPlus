// src/redux/api/timetableApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const timetableApi = createApi({
  reducerPath: "timetableApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  endpoints: (builder) => ({
    deduceTimetable: builder.mutation({
      query: (payload) => ({
        url: "/schedule/deduce",
        method: "POST",
        body: payload,
      }),
    }),
    generateStudyPlan: builder.mutation({
      query: (payload) => ({
        url: "/schedule/study-plan",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useDeduceTimetableMutation, useGenerateStudyPlanMutation } =
  timetableApi;
