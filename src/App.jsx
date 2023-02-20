import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Bonjour tout le monde ! 📺</h1>
      <img src="/rick-roll.gif" alt="Rick Roll" />
    </div>
  )
}

export default App
