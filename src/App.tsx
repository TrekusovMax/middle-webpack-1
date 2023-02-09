import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React + Webpack</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

export default App
