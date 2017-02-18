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
    {id: 0, name: "T. Van der Linden-Smit (Tina)", descShort: "Docent IT en Recht", descLong: "Docent IT en Recht", img: "./images/icon-1x.png"},
    {id: 1, name: "A. Engelfriet (Arnoud)", descShort: "Eigenaar van de blog Ius Mentis", descLong: "Eigenaar van de blog Ius Mentis", img: "./images/icon-1x.png"},
    {id: 2, name: "G.J. Zwenne (Gerrit-Jan)", descShort: "Hoogleraar Recht en Informatiemaatschappij", descLong: "Hoogleraar Recht en Informatiemaatschappij", img: "./images/icon-1x.png"},
    {id: 3, name: "P.H. Blok (Peter)", descShort: "Raadsheer Gerechtshof", descLong: "Raadsheer Gerechtshof", img: "./images/icon-1x.png"},
    {id: 4, name: "T.H. Van den Broek (Tanja)", descShort: "Raadsheer Hoge Raad", descLong: "Raadsheer Hoge Raad", img: "./images/icon-1x.png"},
    {id: 5, name: "J. Pinckaers", descShort: "Raadsheer Gerechtshof", descLong: "Raadsheer Gerechtshof", img: "./images/icon-1x.png"},
    {id: 6, name: "A.D. Kiers-Becking", descShort: "Raadsheer Gerechtshof", descLong: "Raadsheer Gerechtshof", img: "./images/icon-1x.png"},
    {id: 7, name: "G.J. Boeve", descShort: "Advocaat bij Van Benthem & Keulen", descLong: "Advocaat bij Van Benthem & Keulen", img: "./images/icon-1x.png"},
    {id: 8, name: "F. Douwenga", descShort: "Advocaat bij Bird & Bird", descLong: "Advocaat bij Bird & Bird", img: "./images/icon-1x.png"},
    {id: 9, name: "xxx", descShort: "Advocaat", descLong: "Advocaat", img: "./images/icon-1x.png"},
    {id: 10, name: "xxx", descShort: "Advocaat", descLong: "Advocaat", img: "./images/icon-1x.png"},
    {id: 11, name: "xxx", descShort: "Advocaat", descLong: "Advocaat", img: "./images/icon-1x.png"}
  ],
  jurySelected: {id: 0, name: "T. Van der Linden-Smit (Tina)", descShort: "Academici", descLong: "Academici", img: "./images/icon-1x.png"}
}

export default reducerJury
