import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './features/auth/components/loginForm'
import RegisterForm from './features/auth/components/registerForm'

function App() {
  return (
    <Routes>
      <Route path="/login"    element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="*"         element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
