import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import SignIn from './pages/sign_in/sign_in'

const isAuthenticated = true

const App = () => (
  <div className="App">
  <p>{`isAuthenticated: ${isAuthenticated}`}</p>
  <Router>
    <div>
      <ul>
        <li><Link to="/signin">SingIn</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path="/signin" render={props => isAuthenticated
          ? (<Redirect to="/"/>)
          : (<SignIn {...props}/>)
        }/>
      </Switch>
    </div>
  </Router>
</div>
)


export default App