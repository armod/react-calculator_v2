import React, { useState, useReducer, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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
    <AppContext.Provider value={{ mode, changeColor }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
