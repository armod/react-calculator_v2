import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    wynik: 0,
    liczba1: '',
    liczba2: '',
    operator: '',
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const oblicz = () => {
    let rezultat = 0
    if (state.operator === '+') {
      rezultat = Number(state.liczba1) + Number(state.liczba2)
    }
    if (state.operator === '-') {
      rezultat = Number(state.liczba1) - Number(state.liczba2)
    }
    if (state.operator === 'x') {
      rezultat = Number(state.liczba1) * Number(state.liczba2)
    }
    if (state.operator === '/') {
      rezultat = Number(state.liczba1) / Number(state.liczba2)
    }
    dispatch({ type: 'OBLICZ', payload: rezultat })
  }

  const handleNumber = (e) => {
    if (state.operator === '') {
      state.operator = ''
      e.preventDefault()
      state.liczba1 += e.currentTarget.value
      console.log('liczba1=', state.liczba1)
      dispatch({ type: 'SHOW_L1', payload: state.liczba1 })
    }
    if (state.operator !== '') {
      e.preventDefault()
      state.liczba2 += e.currentTarget.value
      console.log('liczba2=', state.liczba2)
      dispatch({ type: 'SHOW_L2', payload: state.liczba2 })
    }
  }

  const handleOperator = (e) => {
    if (e.currentTarget.value === '+') {
      state.operator = '+'
    }
    if (e.currentTarget.value === '-') {
      state.operator = '-'
    }
    if (e.currentTarget.value === 'x') {
      state.operator = 'x'
    }
    if (e.currentTarget.value === '/') {
      state.operator = '/'
    }
    dispatch({ type: 'SHOW_OPERATOR', payload: state.operator })
    console.log('operator', e.currentTarget.value)
  }
  const clear = () => {
    dispatch({ type: 'CLEAR' })
  }
  const [mode, setMode] = useState(true)

  const changeColor = () => {
    if (mode == true) {
      console.log(mode)
      setMode(false)
    } else {
      setMode(true)
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        mode,
        changeColor,
        oblicz,
        clear,
        handleNumber,
        handleOperator,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
