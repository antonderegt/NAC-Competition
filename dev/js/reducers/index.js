import { combineReducers } from 'redux'
import reducerDisplay from './reducer-display'
import reducerJury from './reducer-jury'

const allReducers = combineReducers({
  display: reducerDisplay,
  juryMembers: reducerJury
})

export default allReducers
