import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

function precise(x) {
  if (x > 0) {
    while (x.slice(-1) === '0') {
      x = x.slice(0, -1)
    }
    if (x.slice(-1) === '.') {
      x = x.slice(0, -1)
    }
  }
  return Number(x)
}

const AppProvider = ({ children }) => {
  const initialState = {
    wynik: '',
    liczba1: '',
    liczba2: '',
    operator: '',
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [mode, setMode] = useState(true)

  const oblicz = () => {
    let rezultat = 0
    let strRezultat = ''
    if (state.operator === '+') {
      rezultat = precise((strRezultat = (Number(state.liczba1) + Number(state.liczba2)).toPrecision(10)))
    }
    if (state.operator === '-') {
      rezultat = precise((strRezultat = (Number(state.liczba1) - Number(state.liczba2)).toPrecision(10)))
    }
    if (state.operator === 'x') {
      rezultat = precise((strRezultat = (Number(state.liczba1) * Number(state.liczba2)).toPrecision(10)))
    }
    if (state.operator === '/') {
      rezultat = precise((strRezultat = (Number(state.liczba1) / Number(state.liczba2)).toPrecision(10)))
      console.log(rezultat)
      if (rezultat === Infinity) {
        rezultat = 'Error!'
      }
    }
    if (state.operator === 'sqrt') {
      rezultat = Math.sqrt(Number(state.liczba1))
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

  const handleBack = () => {
    if (state.liczba2 === '') {
      let temp = []
      temp = state.liczba1.split('')
      temp.pop()
      state.liczba1 = temp.join('')
      console.log('pop', temp)
      dispatch({ type: 'SHOW_L1', payload: state.liczba1 })
    }
    if (state.liczba2 !== '') {
      let temp = []
      temp = state.liczba2.split('')
      temp.pop()
      state.liczba2 = temp.join('')
      console.log('pop2', temp)
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
    if (e.currentTarget.value === 'sqrt') {
      state.operator = 'sqrt' //<>&radic;</>
    }
    //po wybraniu operatora (jeśli jest już wynik) ustaw liczbe1 na aktualny wynik działania, a liczbe2 ustaw jako pusty
    if (state.wynik !== '') {
      state.liczba1 = state.wynik
      state.liczba2 = ''
    }
    dispatch({ type: 'SHOW_OPERATOR', payload: state.operator })
    console.log('operator', e.currentTarget.value)
  }
  const clear = () => {
    dispatch({ type: 'CLEAR' })
  }

  const changeColor = () => {
    setMode(!mode)
    console.log('mode=', mode)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        mode,
        oblicz,
        changeColor,
        clear,
        handleNumber,
        handleOperator,
        handleBack,
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
