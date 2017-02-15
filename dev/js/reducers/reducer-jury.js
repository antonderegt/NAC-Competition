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
    {id: 0, name: "T. Van der Linden-Smit (Tina)", descShort: "Academici", descLong: "Academici", img: "./images/icon-1x.png"},
    {id: 1, name: "A. Engelfriet (Arnoud)", descShort: "Academici", descLong: "Academici", img: "./images/icon-1x.png"},
    {id: 2, name: "G.J. Zwenne (Gerrit-Jan)", descShort: "Academici", descLong: "Academici", img: "./images/icon-1x.png"},
    {id: 3, name: "Gerechtshof 1", descShort: "Rechter", descLong: "Rechter", img: "./images/icon-1x.png"},
    {id: 4, name: "Gerechtshof 2", descShort: "Rechter", descLong: "Rechter", img: "./images/icon-1x.png"},
    {id: 5, name: "Advocaat 1", descShort: "Advocaat 2", descLong: "Advocaat", img: "./images/icon-1x.png"},
    {id: 6, name: "Advocaat 2", descShort: "Advocaat 3", descLong: "Advocaat", img: "./images/icon-1x.png"},
    {id: 7, name: "Advocaat 3", descShort: "Advocaat 4", descLong: "Advocaat", img: "./images/icon-1x.png"}
  ],
  jurySelected: {id: 0, name: "T. Van der Linden-Smit (Tina)", descShort: "Academici", descLong: "Academici", img: "./images/icon-1x.png"}
}

export default reducerJury
