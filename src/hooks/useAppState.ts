import {
  CounterAction,
  counterReducer,
  newCounterState,
} from "@/src/biz/counterReducer"
import { Dispatch, useReducer } from "react"

export const useAppState = (): [
  { message: string; count: number },
  Dispatch<CounterAction>
] => {
  const [counterState, dispatch] = useReducer(counterReducer, newCounterState())
  return [{ message: "Hello, world!", count: counterState.count }, dispatch] // TODO memo
}
