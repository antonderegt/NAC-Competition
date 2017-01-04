import { JURY, JURY_SELECTED, JURY_LOAD } from '../actions/actions'

const reducerJury = (state = {
  juryMembers: [
    {id: 0, name: "Piet", descShort: "Rechter", descLong: "Goeie rechter", img: ""},
    {id: 1, name: "Klaas", descShort: "Advocaat", descLong: "Slechte advocaat", img: ""}
  ],
  jurySelected: {id: 0, name: "Piet", descShort: "Rechter", descLong: "Goeie rechter", img: ""}
}, action) => {
    // let id = action.payload
  switch (action.type) {
    case JURY_SELECTED:
      return state//{jurySelected: state.juryMembers[id]}
      break;
    case JURY_LOAD:
      return state
    default:
      return state
  }
}

export default reducerJury
