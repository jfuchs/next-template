import { useEffect, useState } from "react"
import { useAppState } from "@/src/hooks/useAppState"

export const App = () => {
  const [{ count }, dispatch] = useAppState()
  const [greeting, setGreeting] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (typeof greeting !== "undefined") return
    fetch("/api/greeting")
      .then((response) => response.json())
      .then(({ message }) => setGreeting(message))
  })

  return (
    <>
      <h1 className="text-6xl text-blue-800">{greeting || " "}</h1>
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
