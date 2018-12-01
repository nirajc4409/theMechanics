
export const SET_USER = 'SET_USER'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// ​
// /*
//  * other constants
//  */
// ​
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }
// ​
// /*
//  * action creators
//  */
// ​
export function setUser(text) {
  return { type: SET_USER, text }
}
// ​
// // export function toggleTodo(index) {
// //   return { type: TOGGLE_TODO, index }
// // }
// // ​
// // export function setVisibilityFilter(filter) {
// //   return { type: SET_VISIBILITY_FILTER, filter }
// // }