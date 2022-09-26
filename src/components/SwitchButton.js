import React from 'react'
import { useGlobalContext } from '../context'
import '../components/SwitchButton.css'

export const SwitchButton = () => {
  const { changeColor } = useGlobalContext()
  return (
    <div className='center'>
      <input
        type='checkbox'
        onChange={() => {
          changeColor()
        }}
      />
    </div>
  )
}
