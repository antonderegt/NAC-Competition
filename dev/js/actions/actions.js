export const DISPLAY = 'DISPLAY'
export const NAC = 'NAC'
export const INFO = 'INFO';
export const CHRONO = 'CHRONO';
export const JURY = 'JURY';
export const CONTACT = 'CONTACT';

export const actionDisplay = payload => {
  return {
    type: DISPLAY,
    payload
  }
}
// export const fetchUsersRecent = () => dispatch => {
//   return Request.get(urlRecent)
//     .then((response) => dispatch(fetchUsersAlltime(responseR.body)))
// }
