import { setEntries, vote, next, INITIAL_STATE } from "./core"

/**
 * A object representing a potential state change in the application
 * @typedef {Object} Action
 * @property {string} type
 */

/**
 *
 * @param {Map} state
 * @param {Action} action
 */
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_ENTRIES":
      return setEntries(state, action.entries)
    case "NEXT":
      return next(state)
    case "VOTE":
      return state.update("vote", voteState => vote(voteState, action.entry))
    default:
      return state
  }
}

export default reducer
