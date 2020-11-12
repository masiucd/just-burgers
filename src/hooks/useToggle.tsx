import { useState } from "react"

interface UseToggleReturnType {
  state: boolean
  toggle: VoidFn
  setStateToFalse: VoidFn
  setStateToTrue: VoidFn
}

export const useToggle = (
  initialState: boolean = false
): UseToggleReturnType => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState(prev => !prev)
  }

  const setStateToFalse = (): void => {
    setState(false)
  }
  const setStateToTrue = (): void => {
    setState(true)
  }

  return { state, toggle, setStateToFalse, setStateToTrue }
}
