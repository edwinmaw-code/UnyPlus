import { configureStore } from '@reduxjs/toolkit'
import authReducer      from './slices/authSlice'
import timetableReducer from './slices/timetableSlice'
import remindersReducer from './slices/remindersSlice'
import newsReducer      from './slices/newsSlice'

export const store = configureStore({
  reducer: {
    auth:      authReducer,
    timetable: timetableReducer,
    reminders: remindersReducer,
    news:      newsReducer,
  },
})
