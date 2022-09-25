import React, { useState, useReducer, useContext } from 'react'

const AppContext = React.createContext()

const theme = {
  light: {
    bckg: 'yellow',
  },
  dark: {
    bckg: 'green',
  },
}

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(true)
  const zmienKolor = () => {
    if (mode == true) {
      console.log(mode)
      setMode(false)
    } else {
      setMode(true)
    }
  }

  return (
    <AppContext.Provider value={{ mode, zmienKolor }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
