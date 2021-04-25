import { counterReducer, newCounterState } from "@/src/biz/counterReducer"
import times from "lodash/times"

let state = newCounterState()

times(5, (): void => {
  const oldCount = state.count
  state = counterReducer(state, { type: "increment", delta: 2 })
  console.warn(`${oldCount} → ${state.count}`)
})
