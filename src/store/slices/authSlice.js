import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/api'

// ── Async thunks ──────────────────────────────────────────────────────────────

export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await api.post('/api/auth/signup', { name, email, password })
      localStorage.setItem('unyplus_token', data.token)
      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const signinUser = createAsyncThunk(
  'auth/signin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await api.post('/api/auth/signin', { email, password })
      localStorage.setItem('unyplus_token', data.token)
      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const fetchCurrentUser = createAsyncThunk(
  'auth/me',
  async (_, { rejectWithValue }) => {
    try {
      return await api.get('/api/auth/me')
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// ── Slice ─────────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:   null,
    token:  localStorage.getItem('unyplus_token') || null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error:  null,
  },
  reducers: {
    logout(state) {
      state.user   = null
      state.token  = null
      state.status = 'idle'
      state.error  = null
      localStorage.removeItem('unyplus_token')
    },
    clearError(state) {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // signup
    builder
      .addCase(signupUser.pending,   (state)          => { state.status = 'loading'; state.error = null })
      .addCase(signupUser.fulfilled, (state, action)  => { state.status = 'succeeded'; state.user = action.payload.user; state.token = action.payload.token })
      .addCase(signupUser.rejected,  (state, action)  => { state.status = 'failed';    state.error = action.payload })

    // signin
    builder
      .addCase(signinUser.pending,   (state)          => { state.status = 'loading'; state.error = null })
      .addCase(signinUser.fulfilled, (state, action)  => { state.status = 'succeeded'; state.user = action.payload.user; state.token = action.payload.token })
      .addCase(signinUser.rejected,  (state, action)  => { state.status = 'failed';    state.error = action.payload })

    // getMe — validate stored token on app boot
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => { state.user = action.payload.user })
      .addCase(fetchCurrentUser.rejected,  (state)         => {
        // Token is invalid/expired — clear everything
        state.user  = null
        state.token = null
        localStorage.removeItem('unyplus_token')
      })
  },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
