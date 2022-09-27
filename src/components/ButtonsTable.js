import React, { useState } from 'react'
import { Button } from './Button'

export const ButtonsTable = () => {
  const klawisze = [
    '%',
    'C',
    '/',
    'back',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    ',',
    '=',
  ]
  return (
    <>
      {klawisze.map((klawisz, index) => {
        return <Button key={index} {...klawisz} />
      })}
    </>
  )
}
