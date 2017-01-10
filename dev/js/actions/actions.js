export const HOME = 'HOME'
export const INFO = 'INFO';
export const CHRONO = 'CHRONO';
export const CONTACT = 'CONTACT';
export const DISPLAY = 'DISPLAY'
export const JURY_LOAD = 'JURY_LOAD'
export const JURY_SELECTED = 'JURY_SELECTED'
export const TEAM_SELECT = 'TEAM_SELECT'

export const actionDisplay = payload => {
  return {
    type: DISPLAY,
    payload
  }
}
export const actionJuryLoad = () => {
  return {
    type: JURY_LOAD
  }
}
export const actionJurySelect = payload => {
  return {
    type: JURY_SELECTED,
    payload
  }
}
export const actionTeamSelect = payload => {
  return {
    type: TEAM_SELECT,
    payload
  }
}
