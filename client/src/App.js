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

const isAuthenticated = true

const App = () => (
  <div className="App">
  <Router>
    <div>
      <ul>
        <li><Link to="/signin">SingIn</Link></li>
        <li><Link to="/signup">SingUp</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path="/signin" render={props => (<SignIn {...props}/>) }/>
        <Route exact path="/signUp" render={props => (<SignUp {...props}/>) }/>
      </Switch>
    </div>
  </Router>
</div>
)

export default App