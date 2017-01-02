import { combineReducers } from 'redux'
import reducer from './reducer'

const allReducers = combineReducers({
  display: reducer
})

export default allReducers
