import React from 'react'
import { useGlobalContext } from '../context'

export const Button = () => {
  const { mode, zmienKolor } = useGlobalContext()
  return (
    <button
      className='btn'
      onClick={() => {
        zmienKolor()
      }}
    >
      button
    </button>
  )
}
