export const HOME = 'HOME'
export const INFO = 'INFO'
export const CHRONO = 'CHRONO'
export const CONTACT = 'CONTACT'
export const DISPLAY = 'DISPLAY'
export const JURY = 'JURY'
export const JURY_SELECTED = 'JURY_SELECTED'
export const TEAM_SELECT = 'TEAM_SELECT'
export const TEAM_LOAD = 'TEAM_LOAD'

export const actionDisplay = payload => {
  return {
    type: DISPLAY,
    payload
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
export const actionTeamLoad = () => {
  return {
    type: TEAM_LOAD
  }
}
