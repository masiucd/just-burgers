import { useState, useEffect } from "react"

export const useLocalStorage = (key: string, defaultValue: string) => {
  const stored = typeof window !== "undefined" && localStorage.getItem(key)
  const initialValue = stored ? JSON.parse(stored) : defaultValue
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return { value, setValue }
}
