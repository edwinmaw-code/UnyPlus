import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authReducer from "./authSlice";
import { timetableApi } from "./timetableApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [timetableApi.reducerPath]: timetableApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, timetableApi.middleware),
});
