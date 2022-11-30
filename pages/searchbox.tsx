import { ChangeEvent, useCallback, useState } from "react"
import { LOREM_IPSUM } from "../utils/constants"

const ITEMS = LOREM_IPSUM.slice(0, 10_000)

export default function Page() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState<string[]>(ITEMS)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setResults(ITEMS.filter((word) => word.includes(e.target.value)))
  }, [])

  return (
    <div>
      <input value={value} onChange={handleChange} />

      <div>
        {results.map((word, index) => (
          <div key={`${word}-${index}`}>{word}</div>
        ))}
      </div>
    </div>
  )
}
