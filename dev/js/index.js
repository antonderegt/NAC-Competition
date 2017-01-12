import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'
import App from './components/App'
import Sw from './app'
import BackButton from './back-button'


const store = createStore(
  allReducers
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
