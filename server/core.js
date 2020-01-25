import { List, Map } from "immutable"

/**
 *
 * @param {Map} state
 * @param {List | Iterable} entries
 * @return {*}
 */
export function setEntries(state, entries) {
  return state.set("entries", List(entries))
}

/**
 *
 * @param {Map} vote An immutable Map of the current vote status
 * @return {*[]} An array of the element within vote.pair that has
 * the highest tally, or both if there is a tie
 */
// eslint-disable-next-line no-shadow
function getWinners(vote) {
  if (!vote) return []
  const [a, b] = vote.get("pair")
  const aVotes = vote.getIn(["tally", a], 0)
  const bVotes = vote.getIn(["tally", b], 0)
  if (aVotes > bVotes) return [a]
  if (bVotes > aVotes) return [b]
  return [a, b]
}

/**
 *
 * @param {Map} state
 * @return {Map}
 */
export function next(state) {
  const entries = state.get("entries").concat(getWinners(state.get("vote")))
  return state.merge({
    vote: Map({ pair: entries.take(2) }),
    entries: entries.skip(2),
  })
}

/**
 *
 * @param {Map} state
 * @param {string} entry
 * @return {Map}
 */
export function vote(state, entry) {
  return state.updateIn(["vote", "tally", entry], 0, tally => tally + 1)
}
