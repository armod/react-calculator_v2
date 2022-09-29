import React from 'react'
import { ButtonsTable } from './ButtonsTable'
import { Result } from './Result'
import { BsSun, BsMoonFill } from 'react-icons/bs'
import { useGlobalContext } from '../context'

export const Container = () => {
  const { mode, changeColor } = useGlobalContext()
  return (
    <>
      <div className='wrapper'>
        <BsMoonFill />
        <BsSun onClick={changeColor} />
      </div>
      <div className={`${mode ? 'container light' : 'container dark'}`}>
        <Result />
        <ButtonsTable />
      </div>
    </>
  )
}
