"use client"

import { useState, useEffect } from "react"
import gigachadSvg from "./assets/Gigachad.svg"

const GigaCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Congrats you did ${count} reps!`)
    }
  }, [count])

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 0 ? count - 1 : 0)
  const reset = () => setCount(0)

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-bold mr-3">Giga Counter 💪</h2>
      </div>
      <div className="text-6xl font-bold mb-6">{count}</div>
      <div className="flex space-x-4">
        <button onClick={decrement} className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
          -
        </button>
        <button onClick={reset} className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
          Reset
        </button>
        <button onClick={increment} className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
          +
        </button>
      </div>
    </div>
  )
}

export default GigaCounter