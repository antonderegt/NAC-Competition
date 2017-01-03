import { combineReducers } from 'redux'
import reducerDisplay from './reducer-display'
// import reducerJury from './reducer-jury'
// ,
// jury: reducerJury

const allReducers = combineReducers({
  display: reducerDisplay
})

export default allReducers
