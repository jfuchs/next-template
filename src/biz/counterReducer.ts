export interface CounterState {
  count: number
}

export type CounterAction = { type: "increment"; delta?: number }

export const newCounterState = (): CounterState => ({ count: 0 })

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment": {
      const delta = typeof action.delta !== "undefined" ? action.delta : 1
      return { ...state, count: state.count + delta }
    }
    default:
  }
}
