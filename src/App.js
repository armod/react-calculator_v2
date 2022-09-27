import React from 'react'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { SwitchButton } from './components/SwitchButton'
import { useGlobalContext } from './context'

function App() {
  const { mode } = useGlobalContext()
  return (
    <div className='wrapper'>
      <div className={`${mode ? 'wrapper light' : 'wrapper dark'}`}>
        <SwitchButton />
        <Container />
      </div>
    </div>
  )
}

export default App
