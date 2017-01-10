import { combineReducers } from 'redux'
import reducerDisplay from './reducer-display'
import reducerJury from './reducer-jury'
import reducerChrono from './reducer-chrono'

const allReducers = combineReducers({
  display: reducerDisplay,
  jury: reducerJury,
  chrono: reducerChrono
})

export default allReducers
