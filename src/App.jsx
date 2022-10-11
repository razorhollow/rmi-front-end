import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import ResponsiveAppBar from './components/NavBar/AppBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import CapabilityDetails from './pages/CapabilityDetails/CapabilityDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import * as authService from './services/authService'
import theme from './components/ui/Theme'
import capabilities from './components/Carousel/capabilities.js'

theme.typography.h1={
  fontSize: '7rem',
  '@media (max-width:600px)': {
    fontSize: '3rem',
  }
}

theme.typography.body1={
  '@media (max-width:600px)': {
    lineHeight: '1.5rem',
  }
}

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [capabilityData, setCapabilityData] = useState(capabilities)
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      <ResponsiveAppBar user={user} handleLogout={handleLogout} capabilityData={capabilityData}/>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/:capabilityUrl" element={<CapabilityDetails />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
