import React from 'react'
import { Button } from './components/Button'
import { useGlobalContext } from './context'
import './App.css'

function App() {
  const { mode } = useGlobalContext()
  return (
    <div className='App'>
      <div className={`${mode ? 'container' : 'container2'}`}></div>
      <Button />
    </div>
  )
}

export default App
