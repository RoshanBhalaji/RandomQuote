import { useState } from 'react'
import Random from './assets/Random/Random'
import './App.css'
import './assets/Random/Random.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <Random />
      </div>
      
    </>
  )
}

export default App
