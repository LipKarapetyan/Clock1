import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Clock />
  )
}

export default App
