import { useAppState } from "@/src/hooks/useAppState"

export const App = () => {
  const [{ message, count }, dispatch] = useAppState()

  return (
    <>
      <h1 className="text-6xl text-blue-800">{message}</h1>
      <h1 className="text-6xl text-yellow-800">Count: {count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="text-6xl text-purple-800"
      >
        Increment
      </button>
    </>
  )
}
