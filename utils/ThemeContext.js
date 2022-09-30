import React, {useContext, useState} from 'react';


// this is my global variab les class if you will
// set the sidebar open/closed here
// also include the title of the navbar to be customizeable based on the page
// test by just putting it as a heading in mainNavBar container
export const ThemeContext = React.createContext({
    mainNavBarTitle: undefined,
    sideBarOpen: undefined,
    setSideBarOpen: async (sideBarOpen) =>null,
    setNavBarTitle: async (mainNavBarTitle) => null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [mainNavBarTitle, setNavBarTitle] = useState('Main Dashboard');
    return <ThemeContext.Provider value={{ mainNavBarTitle, sideBarOpen, setSideBarOpen, setNavBarTitle}}>{children}</ThemeContext.Provider>
}