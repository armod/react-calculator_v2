import React, { useState, useReducer, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(true)
  const [klawisze, setKlawisze] = useState([
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
  ])

  const changeColor = () => {
    if (mode == true) {
      console.log(mode)
      setMode(false)
    } else {
      setMode(true)
    }
  }

  const ustawNazwe = () => {
    setKlawisze(klawisze)
  }

  return (
    <AppContext.Provider value={{ mode, changeColor, klawisze }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
