import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    wynik: 0,
    liczba1: 0,
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

  const handleNumber = (num) => {
    console.log(num)
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
