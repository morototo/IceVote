import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { verifyCredentials } from '../config/redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module
const store = configureStore()
verifyCredentials(store)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)