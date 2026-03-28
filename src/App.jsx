import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from './store/slices/authSlice'

import Landing    from './pages/Landing'
import SignUp     from './pages/SignUp'
import SignIn     from './pages/SignIn'
import Onboarding from './pages/Onboarding'
import Dashboard  from './pages/Dashboard'
import StudySpace from './pages/StudySpace'
import Timetable  from './pages/Timetable'

// Redirect to /signin if no token is stored
function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token)
  if (!token) return <Navigate to="/signin" replace />
  return children
}

function App() {
  const dispatch = useDispatch()
  const token    = useSelector((state) => state.auth.token)

  // On boot, validate the stored token and load the current user
  useEffect(() => {
    if (token) dispatch(fetchCurrentUser())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Landing />} />
        <Route path="/signup"    element={<SignUp />} />
        <Route path="/signin"    element={<SignIn />} />
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route path="/dashboard"  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/studyspace" element={<ProtectedRoute><StudySpace /></ProtectedRoute>} />
        <Route path="/timetable"  element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
