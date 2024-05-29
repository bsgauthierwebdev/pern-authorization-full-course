import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import Home from '../src/pages/home'
import Dashboard from '../src/pages/dashboard'
import Register from '../src/pages/register'
import Login from '../src/pages/login'
import Navbar from './components/Navbar'

// Route Components

const PrivateRoutes = () => {
  const isAuth = false

  return (
    <>
      {isAuth ? <Outlet /> : <Navigate to = '/login' />}
    </>
  )
}

const RestrictedRoutes = () => {
  const isAuth = false

  return (
    <>
      {!isAuth ? <Outlet /> : <Navigate to = '/dashboard' />}
    </>
  )
}

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path = '/' element = {<Home />} />

        <Route element = {<PrivateRoutes />}>
          <Route exact path = '/dashboard' element = {<Dashboard />} />
        </Route>

        <Route element = {<RestrictedRoutes />}>
          <Route exact path = '/register' element = {<Register />} />
          <Route exact path = '/login' element = {<Login />} />
        </Route>        
      </Routes>
    </Router>
  )
}

export default App