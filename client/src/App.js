import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import SignIn from './pages/sign_in/sign_in'
import SignUp from './pages/sign_up/sign_up'
import Home from './pages/home/home'
import Header from './common/header'

const isAuthenticated = true

const App = () => (
  <div className="App">
  <Header />
</div>
)

export default App