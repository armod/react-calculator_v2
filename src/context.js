import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    wynik: 0,
    liczba1: '',
    liczba2: 0,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const oblicz = () => {
    dispatch({ type: 'OBLICZ' })
  }
  const dodaj = () => {
    dispatch({ type: 'DODAJ' })
  }

  const generujL1 = () => {
    dispatch({ type: 'GENERUJ_L1' })
  }
  const generujL2 = () => {
    dispatch({ type: 'GENERUJ_L2' })
  }

  const handleNumber = (e) => {
    initialState.liczba1 += e.currentTarget.value
    // console.log('nr=', e.currentTarget.value, 'name=', e.currentTarget.name)
    console.log('handleNumber=', e.currentTarget.value, initialState.liczba1)
  }

  const handleOperator = (e) => {
    console.log('operator', e.currentTarget.value)
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
        dodaj,
        handleNumber,
        handleOperator,
        generujL1,
        generujL2,
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
