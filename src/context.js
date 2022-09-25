import React, { useState, useReducer, useContext } from 'react'
const theme = {
  light: {
    bckg: 'yellow',
  },
  dark: {
    bckg: 'green',
  },
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={theme.light}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
