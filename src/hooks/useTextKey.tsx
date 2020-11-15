import { useState } from "react"
import textKeys from "../texts"

const useTextKey = () => {
  const [textKeysMap, setTextKeysMap] = useState<TextKey<TextKeyMap>>(textKeys)

  const getText = <T extends keyof TextKeyMap>(key: T) => textKeysMap[key]

  return { t: getText }
}

export default useTextKey
