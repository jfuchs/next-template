import { counterReducer, newCounterState } from "@/src/biz/counterReducer"
import times from "lodash/times"

describe("counterReducer", () => {
  test("counter increments when no delta is specified", () => {
    const state = newCounterState()
    expect(counterReducer(state, { type: "increment" })).toEqual({ count: 1 })
  })

  test("counter increments when delta is specified", () => {
    const state = newCounterState()
    expect(counterReducer(state, { type: "increment", delta: 3 })).toEqual({
      count: 3,
    })
  })

  test("counter increments when called multiple times", () => {
    let state = newCounterState()
    times(5, () => {
      state = counterReducer(state, { type: "increment", delta: 2 })
    })
    expect(state).toEqual({
      count: 10,
    })
  })
})
