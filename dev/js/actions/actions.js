export const NAC = 'NAC'
export const INFO = 'INFO';
export const CHRONO = 'CHRONO';
export const CONTACT = 'CONTACT';
export const DISPLAY = 'DISPLAY'
export const JURY_LOAD = 'JURY_LOAD'
export const JURY_SELECTED = 'JURY_SELECTED'


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
export const actionJurySelect = (payload) => {
  return {
    type: JURY_SELECTED,
    payload
  }
}
// export const fetchUsersRecent = () => dispatch => {
//   return Request.get(urlRecent)
//     .then((response) => dispatch(fetchUsersAlltime(responseR.body)))
// }
