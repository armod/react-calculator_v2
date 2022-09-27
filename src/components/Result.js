import React from 'react'
import { useGlobalContext } from '../context'

export const Result = () => {
  const { wynik, liczba1, liczba2 } = useGlobalContext()
  return (
    <div className='wynik'>
      <div className='gora'>
        L1={liczba1}, L2={liczba2}
      </div>
      <div className='dol'>{wynik}</div>
    </div>
  )
}
