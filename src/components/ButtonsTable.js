import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Button } from './Button'

export const ButtonsTable = () => {
  const { klawisze, oblicz, dodaj, handleNumber, handleOperator } =
    useGlobalContext()
  return (
    <>
      <button className='btn'>C</button>
      <button className='btn'>/</button>
      <button className='btn podwojny'>back</button>
      <button
        className='btn'
        name='numer siedem'
        value={7}
        onClick={handleNumber}
      >
        7
      </button>
      <button className='btn' value={8} onClick={handleNumber}>
        8
      </button>
      <button className='btn' value={9} onClick={handleNumber}>
        9
      </button>
      <button className='btn'>x</button>
      <button className='btn' value={4} onClick={handleNumber}>
        4
      </button>
      <button className='btn' value={5} onClick={handleNumber}>
        5
      </button>
      <button className='btn' value={6} onClick={handleNumber}>
        6
      </button>
      <button className='btn'>-</button>
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
      <button className='btn'>+/-</button>
      <button className='btn' value={0} onClick={handleNumber}>
        0
      </button>
      <button className='btn'>,</button>
      <button
        className='btn rowna'
        onClick={() => {
          oblicz()
        }}
      >
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
