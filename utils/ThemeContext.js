import React, {useContext, useState} from 'react';


export const ThemeContext = React.createContext({
    sideBarOpen: undefined,
    setSideBarOpen: async (sideBarOpen) =>null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [sideBarOpen, setSideBarOpen] = useState(true)

    return <ThemeContext.Provider value={{ sideBarOpen, setSideBarOpen}}>{children}</ThemeContext.Provider>
}