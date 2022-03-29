import React from 'react'
import useTheme from 'hooks/useTheme'
export const AppContext = React.createContext({})

const AppProvider = ({ children }) => {
  const theme = useTheme()

  return <AppContext.Provider value={theme}>{children}</AppContext.Provider>
}

export default AppProvider
