import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/api'

export const fetchNews = createAsyncThunk(
  'news/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return await api.get('/api/news')
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items:  [],
    status: 'idle',
    error:  null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending,   (state)         => { state.status = 'loading' })
      .addCase(fetchNews.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload.news })
      .addCase(fetchNews.rejected,  (state, action) => { state.status = 'failed';    state.error = action.payload })
  },
})

export default newsSlice.reducer
