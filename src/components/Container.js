import React from 'react'
import { ButtonsTable } from './ButtonsTable'
import { Result } from './Result'

export const Container = () => {
  return (
    <div className='container'>
      <Result />
      <ButtonsTable />
    </div>
  )
}
