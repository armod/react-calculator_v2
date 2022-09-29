import React from 'react'
import { ButtonsTable } from './ButtonsTable'
import { Result } from './Result'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useGlobalContext } from '../context'

export const Container = () => {
  const { mode, changeColor } = useGlobalContext()
  return (
    <>
      <div className='header'>
        <div className='icon-mode' onClick={changeColor}>
          <BsSun className={`${mode ? 'show' : 'icon-mode'}`} />
          <BsMoon className={`${mode ? 'icon-mode' : 'show'}`} />
        </div>
      </div>
      <div className={`${mode ? 'wrapper light' : 'wrapper dark'}`}>
        <div className='container'>
          <Result />
          <ButtonsTable />
        </div>
      </div>
    </>
  )
}
