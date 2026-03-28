import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/api'

export const fetchTimetable = createAsyncThunk(
  'timetable/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return await api.get('/api/timetable')
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const timetableSlice = createSlice({
  name: 'timetable',
  initialState: {
    lectures: [],
    status:   'idle',
    error:    null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimetable.pending,   (state)         => { state.status = 'loading' })
      .addCase(fetchTimetable.fulfilled, (state, action) => { state.status = 'succeeded'; state.lectures = action.payload.lectures })
      .addCase(fetchTimetable.rejected,  (state, action) => { state.status = 'failed';    state.error    = action.payload })
  },
})

export default timetableSlice.reducer
