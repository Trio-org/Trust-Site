import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Services/>
    </div>
  )
}

export default App
