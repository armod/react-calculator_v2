import React from 'react'
import { useGlobalContext } from '../context'

export const Button = () => {
  const { klawisze } = useGlobalContext()
  return (
    <>
      <button className='btn'>XXX</button>
    </>
  )
}
