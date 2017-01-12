import React from 'react'
import { DISPLAY, HOME } from '../actions/actions'

const reducerDisplay = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return Object.assign({}, state, {display: action.payload})
      break;
    default:
      return state
  }
}

const initialState = {
  display: HOME
}

export default reducerDisplay
