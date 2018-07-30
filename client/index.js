import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// establishes socket connection
import './socket'

const options = {
  position: `bottom center`,
  timeout: 5000,
  offset: `30px`,
  transition: `scale`
}

ReactDOM.render(

  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <Router history={history}>
        <App />
      </Router>
    </AlertProvider>
  </Provider>
  ,
  document.getElementById(`app`)
)
