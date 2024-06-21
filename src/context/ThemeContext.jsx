import React, {createContext, useContext} from 'react'

//create the context object
const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={{}}>
        {children}
        </ThemeContext.Provider>
  )
}

export default ThemeContext