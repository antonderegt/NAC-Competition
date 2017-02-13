import React from 'react'
import { TEAM_SELECT } from '../actions/actions'

const reducerChrono = (state = initialState, action) => {
  switch (action.type) {
    case TEAM_SELECT:
      localStorage.setItem("team", action.payload);
      return Object.assign({}, state, {teamSelected: action.payload})
      break;
    default:
      return state
  }
}

const initialState = {
  teams: [
    {name: "Selecteer team...", locationOne: "Selecteer team", locationTwo: "Selecteer team"},
    {name: "Cicero", locationOne: "Zaal 3", locationTwo: "Zaal 3"},
    {name: "DiCiT", locationOne: "Zaal 4", locationTwo: "Zaal 2"},
    {name: "Diephuis I", locationOne: "Zaal 1", locationTwo: "Zaal 3"},
    {name: "Diephuis II", locationOne: "Zaal 4", locationTwo: "Zaal 1"},
    {name: "Eggens I", locationOne: "Zaal 1", locationTwo: "Zaal 2"},
    {name: "Eggens II", locationOne: "Zaal 2", locationTwo: "Zaal 4"},
    {name: "Eggens III", locationOne: "Zaal 3", locationTwo: "Zaal 1"},
    {name: "Rota Carolina", locationOne: "Zaal 2", locationTwo: "Zaal 4"}
  ],
  teamSelected: "Selecteer team..."
}

export default reducerChrono
