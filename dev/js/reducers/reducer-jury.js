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
    {id: 0, name: "Piet1", descShort: "Rechter 1", descLong: "Goeie rechter 1 Goeie rechter 1 Goeie rechter 1 Goeie rechter 1 Goeie rechter 1 Goeie rechter 1", img: "./images/icon-1x.png"},
    {id: 1, name: "Piet2", descShort: "Rechter 2", descLong: "Goeie rechter 2 Goeie rechter 2 Goeie rechter 2 Goeie rechter 2 Goeie rechter 2 Goeie rechter 2", img: "./images/icon-1x.png"},
    {id: 2, name: "Piet3", descShort: "Rechter 3", descLong: "Goeie rechter 3 Goeie rechter 3 Goeie rechter 3 Goeie rechter 3 Goeie rechter 3 Goeie rechter 3", img: "./images/icon-1x.png"},
    {id: 3, name: "Piet4", descShort: "Rechter 4", descLong: "Goeie rechter 4 Goeie rechter 4 Goeie rechter 4 Goeie rechter 4 Goeie rechter 4 Goeie rechter 4", img: "./images/icon-1x.png"},
    {id: 4, name: "Klaas1", descShort: "Advocaat 1", descLong: "Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1", img: "./images/icon-1x.png"},
    {id: 5, name: "Klaas2", descShort: "Advocaat 2", descLong: "Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 2 Slechte advocaat 2 Slechte advocaat 2 Slechte advocaat 2 Slechte advocaat 2 Slechte advocaat 2 Slechte advocaat 2", img: "./images/icon-1x.png"},
    {id: 6, name: "Klaas3", descShort: "Advocaat 3", descLong: "Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 3 Slechte advocaat 3 Slechte advocaat 3 Slechte advocaat 3 Slechte advocaat 3 Slechte advocaat 3 Slechte advocaat 3", img: "./images/icon-1x.png"},
    {id: 7, name: "Klaas4", descShort: "Advocaat 4", descLong: "Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 1 Slechte advocaat 4 Slechte advocaat 4 Slechte advocaat 4 Slechte advocaat 4 Slechte advocaat 4 Slechte advocaat 4 Slechte advocaat 4", img: "./images/icon-1x.png"}
  ],
  jurySelected: {id: 0, name: "Piet", descShort: "Rechter", descLong: "Goeie rechter", img: "./images/icon-1x.png"}
}

export default reducerJury
