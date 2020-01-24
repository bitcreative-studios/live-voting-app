import { List } from "immutable"

/**
 *
 * @param state
 * @param entries
 * @return {*}
 */
function setEntries(state, entries) {
  return state.set("entries", List(entries))
}
export default setEntries
