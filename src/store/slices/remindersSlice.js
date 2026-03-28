import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/api'

export const fetchReminders = createAsyncThunk(
  'reminders/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return await api.get('/api/reminders')
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const completeReminder = createAsyncThunk(
  'reminders/complete',
  async (id, { rejectWithValue }) => {
    try {
      return await api.patch(`/api/reminders/${id}/complete`)
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const deleteReminder = createAsyncThunk(
  'reminders/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/reminders/${id}`)
      return id
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const remindersSlice = createSlice({
  name: 'reminders',
  initialState: {
    items:  [],
    status: 'idle',
    error:  null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReminders.pending,   (state)         => { state.status = 'loading' })
      .addCase(fetchReminders.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload.reminders })
      .addCase(fetchReminders.rejected,  (state, action) => { state.status = 'failed';    state.error = action.payload })

      .addCase(completeReminder.fulfilled, (state, action) => {
        const idx = state.items.findIndex((r) => r._id === action.payload.reminder._id)
        if (idx !== -1) state.items[idx] = action.payload.reminder
      })

      .addCase(deleteReminder.fulfilled, (state, action) => {
        state.items = state.items.filter((r) => r._id !== action.payload)
      })
  },
})

export default remindersSlice.reducer
