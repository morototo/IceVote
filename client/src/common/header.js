import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import SignIn from '../pages/sign_in/sign_in'
import SignUp from '../pages/sign_up/sign_up'
import Home from '../pages/home/home'

export default function Header() {
    return (
        <header className="header">
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">SingIn</Link></li>
                    <li><Link to="/signup">SingUp</Link></li>
                </ul>
            
                <hr/>

                <Switch>
                    <Route exact path="/" render={props => (<Home {...props}/>) }/>
                    <Route exact path="/signin" render={props => (<SignIn {...props}/>) }/>
                    <Route exact path="/signUp" render={props => (<SignUp {...props}/>) }/>
                </Switch>
            </Router>
        </header>
    )

}