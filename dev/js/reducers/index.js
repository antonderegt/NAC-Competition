import { combineReducers } from 'redux'
import reducer from './reducer'

const allReducers = combineReducers({
  state: reducer
})

export default allReducers
