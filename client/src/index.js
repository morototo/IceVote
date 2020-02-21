import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { verifyCredentials } from './config/redux-token-auth-config'
const store = configureStore()
verifyCredentials(store)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)