import React from 'react'
import { useGlobalContext } from '../context'
import '../components/SwitchButton.scss'

export const SwitchButton = () => {
  const { changeColor } = useGlobalContext()
  return (
    <label className='switch'>
      <input
        type='checkbox'
        onChange={() => {
          changeColor()
        }}
      />
      <div></div>
    </label>
  )
}
