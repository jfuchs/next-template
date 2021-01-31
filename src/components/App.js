import { useAppState } from "@/src/hooks/useAppState"

export const App = () => {
  const { message } = useAppState()

  return <h1 className="text-6xl text-blue-800">{message}</h1>
}
