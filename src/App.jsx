import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Homepage />
    </>
  )
}

export default App
