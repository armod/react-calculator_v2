import React from 'react'
import { useGlobalContext } from '../context'

export const Result = () => {
  const { wynik, liczba1, liczba2, operator } = useGlobalContext()
  return (
    <div className='wynik'>
      <div className='gora'>
        {liczba1}
        {operator}
        {liczba2}
      </div>
      <div className='dol'>{wynik}</div>
    </div>
  )
}
