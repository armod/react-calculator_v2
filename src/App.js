import React from 'react'
import { Button } from './components/Button'
import { SwitchButton } from './components/SwitchButton'
import { useGlobalContext } from './context'
import './App.css'

function App() {
  const { mode } = useGlobalContext()
  return (
    <div className='App'>
      <div className={`${mode ? 'wrapper-light' : 'wrapper-dark'}`}>
        <SwitchButton />
      </div>
    </div>
  )
}

export default App
