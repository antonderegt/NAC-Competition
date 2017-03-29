import { JURY, JURY_SELECTED, JURY_LOAD } from '../actions/actions'

const reducerJury = (state = initialState, action) => {
  switch (action.type) {
    case JURY_SELECTED:
      return Object.assign({}, state, {jurySelected: action.payload})
      break;
    default:
      return state
  }
}

const initialState = {
  juryMembers: [
    {id: 0, name: "Name 1", descShort: "Does something", descLong: "Does something everyday", img: "./images/jury/xxx.png"},
    {id: 1, name: "Name 2", descShort: "Does something", descLong: "Does something everyday", img: "./images/jury/xxx.png"},
    {id: 2, name: "Name 3", descShort: "Does something", descLong: "Does something everyday", img: "./images/jury/xxx.png"},
    {id: 3, name: "Name 4", descShort: "Does something", descLong: "Does something everyday", img: "./images/jury/xxx.png"},
    {id: 4, name: "Name 5", descShort: "Does something", descLong: "Does something everyday", img: "./images/jury/xxx.png"},
  ],
  jurySelected: {id: 0, name: "Name 1", descShort: "Does somethin", descLong: "Does something everyday", img: "./images/xxx.png"}
}

export default reducerJury
