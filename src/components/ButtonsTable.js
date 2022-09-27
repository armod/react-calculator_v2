import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Button } from './Button'

export const ButtonsTable = () => {
  const { klawisze } = useGlobalContext()
  return (
    <>
      {klawisze.map((klawisz, index) => {
        return (
          <button className='btn' key={index}>
            {klawisz}
          </button>
        )
      })}
    </>
  )
}
