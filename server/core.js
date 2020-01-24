import { List, Map } from "immutable"

/**
 *
 * @param state
 * @param entries
 * @return {*}
 */
export function setEntries(state, entries) {
  return state.set("entries", List(entries))
}

/**
 *
 * @param state
 * @return {*}
 */
export function next(state) {
  const entries = state.get("entries")
  return state.merge({
    vote: Map({ pair: entries.take(2) }),
    entries: entries.skip(2),
  })
}

export function vote(state, entry) {
  return state.updateIn(["vote", "tally", entry], 0, tally => tally + 1)
}
