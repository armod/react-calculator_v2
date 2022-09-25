import React from 'react'
import { useGlobalContext } from '../context'

export const Button = () => {
  const { bckg } = useGlobalContext()
  return (
    <button className='btn' style={{ background: bckg }}>
      button
    </button>
  )
}
