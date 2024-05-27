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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route exact path = '/dashboard' element = {<Dashboard />} />
        <Route exact path = '/register' element = {<Register />} />
        <Route exact path = '/login' element = {<Login />} />
      </Routes>
    </Router>
  )
}

export default App