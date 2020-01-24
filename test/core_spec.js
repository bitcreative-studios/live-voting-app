import { List, Map } from "immutable"
import { expect } from "chai"

import setEntries from "../server/core"

describe("application logic", () => {
  describe("setEntries", () => {
    it("adds the entries to the state", () => {
      const state = Map()
      const entries = List.of("Trainspoting", "28 Days Later")
      const nextState = setEntries(state, entries)
      expect(nextState).to.equal(
        Map({
          entries: List.of("Trainspoting", "28 Days Later"),
        })
      )
    })

    it("converts to immutable", () => {
      const state = Map()
      const entries = ["Trainspoting", "28 Days Later"]
      const nextState = setEntries(state, entries)
      expect(nextState).to.equal(
        Map({
          entries: List.of("Trainspoting", "28 Days Later"),
        })
      )
    })
  })
})
