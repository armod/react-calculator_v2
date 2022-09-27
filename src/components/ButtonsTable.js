import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Button } from './Button'

export const ButtonsTable = () => {
  const { klawisze, oblicz, dodaj, handleNumber } = useGlobalContext()
  return (
    <>
      <button className='btn'>C</button>
      <button className='btn'>/</button>
      <button className='btn podwojny'>back</button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(7)
          console.log('handle number 7')
        }}
      >
        7
      </button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(8)
        }}
      >
        8
      </button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(9)
        }}
      >
        9
      </button>
      <button className='btn'>x</button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(4)
        }}
      >
        4
      </button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(5)
        }}
      >
        5
      </button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(6)
        }}
      >
        6
      </button>
      <button className='btn'>-</button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(1)
        }}
      >
        1
      </button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(2)
        }}
      >
        2
      </button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(3)
        }}
      >
        3
      </button>
      <button
        className='btn'
        onClick={() => {
          console.log('dodawanie')
        }}
      >
        +
      </button>
      <button className='btn'>+/-</button>
      <button
        className='btn'
        onClick={() => {
          handleNumber(0)
        }}
      >
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
