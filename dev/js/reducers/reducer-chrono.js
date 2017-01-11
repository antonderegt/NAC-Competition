import React from 'react'
import { TEAM_SELECT } from '../actions/actions'
import idb from 'idb'

// Make db
let dbPromise = idb.open('team-db', 1, upgradeDb => {
  let keyValStore = upgradeDb.createObjectStore('teamName')
  keyValStore.put('Selecteer team...', 'team')
})

// Add to db
function changeTeam(team) {dbPromise.then((db) => {
  let tx = db.transaction('teamName', 'readwrite')
  let keyValStore = tx.objectStore('teamName')
  keyValStore.put(team, 'team')
  return tx.complete
})
}

const reducerChrono = (state = initialState, action) => {
  switch (action.type) {
    case TEAM_SELECT:
      changeTeam(action.payload)
      return Object.assign({}, state, {teamSelected: action.payload})
      break;
    default:
      return state
  }
}

const initialState = {
  teams: [
    {name: "Selecteer team...", locationOne: "Selecteer team", locationTwo: "Selecteer team"},
    {name: "Team 1", locationOne: "Grote zaal", locationTwo: "Ronde zaal"},
    {name: "Team 2", locationOne: "Kleine zaal", locationTwo: "Vierkante zaal"},
    {name: "Team 3", locationOne: "Middel zaal", locationTwo: "Gele zaal"},
    {name: "Team 4", locationOne: "Giga zaal", locationTwo: "Ovale zaal"},
    {name: "Team 5", locationOne: "Mega zaal", locationTwo: "Oranje zaal"},
    {name: "Team 6", locationOne: "Mini zaal", locationTwo: "Advocaten zaal"},
    {name: "Team 7", locationOne: "Gewone zaal", locationTwo: "Andere zaal"}
  ],
  teamSelected: "Selecteer team..."
}

export default reducerChrono
