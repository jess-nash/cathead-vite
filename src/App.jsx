import { useState } from 'react'
import cat from '../public/cat.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hewwo</h1>
      <div>
        <img onClick={() => setCount((count) => count + 1)} src={cat} className="logo" alt="Cat" />
      </div>
      <p>Click the cat head.</p>
      <div className="card">
        <span>
          You've clicked him {count} times. Good job.
        </span>
      </div>
    </div>
  )
}

export default App
