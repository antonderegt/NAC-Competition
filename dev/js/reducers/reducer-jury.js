import { JURY } from '../actions/actions'

const reducerJury = (state = {
  juryMembers: [
    {id: 0, name: "Piet", desc: "Rechter", img: ""},
    {id: 1, name: "Klaas", desc: "Advocaat", img: ""}
  ],
  jurySelected: {name: "Piet"}, action) => {
    let id = action.payload
  switch (action.type) {
    case JURY_SELECTED:
      return {jurySelected: state.juryMembers[id]}
      break;
    default:
      return state
  }
}

export default reducer
