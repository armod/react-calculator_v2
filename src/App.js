import React from 'react'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { SwitchButton } from './components/SwitchButton'
import { useGlobalContext } from './context'

function App() {
  const { mode } = useGlobalContext()
  return (
    <div className={`${mode ? 'container light' : 'container dark'}`}>
      <SwitchButton />
      <Container />
    </div>
  )
}

export default App
