import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { BsBackspace } from 'react-icons/bs'
import { Button } from './Button'

export const ButtonsTable = () => {
  const { oblicz, handleNumber, clear, handleOperator, handleBack } = useGlobalContext()
  return (
    <>
      <button className='btn' onClick={clear}>
        C
      </button>
      <button className='btn' value={'/'} onClick={handleOperator}>
        /
      </button>
      <button className='btn podwojny' onClick={handleBack}>
        <BsBackspace />
      </button>
      <button className='btn' value={7} onClick={handleNumber}>
        7
      </button>
      <button className='btn' value={8} onClick={handleNumber}>
        8
      </button>
      <button className='btn' value={9} onClick={handleNumber}>
        9
      </button>
      <button className='btn' value={'x'} onClick={handleOperator}>
        x
      </button>
      <button className='btn' value={4} onClick={handleNumber}>
        4
      </button>
      <button className='btn' value={5} onClick={handleNumber}>
        5
      </button>
      <button className='btn' value={6} onClick={handleNumber}>
        6
      </button>
      <button className='btn' value={'-'} onClick={handleOperator}>
        -
      </button>
      <button className='btn' value={1} onClick={handleNumber}>
        1
      </button>
      <button className='btn' value={2} onClick={handleNumber}>
        2
      </button>
      <button className='btn' value={3} onClick={handleNumber}>
        3
      </button>
      <button className='btn' value={'+'} onClick={handleOperator}>
        +
      </button>
      <button className='btn' value={'sqrt'} onClick={handleOperator}>
        <>&radic;</>
      </button>
      <button className='btn' value={0} onClick={handleNumber}>
        0
      </button>
      <button className='btn' value={'.'} onClick={handleNumber}>
        ,
      </button>
      <button className='btn rowna' value={'='} onClick={oblicz}>
        =
      </button>
    </>
  )
}
/* {klawisze.map((klawisz, index) => {
        return (
          <button className='btn' key={index}>
            {klawisz}
          </button>
        )
      })} */
