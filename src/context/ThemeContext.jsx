import {  createContext, useEffect, useState } from "react"


export const ThemeContext = createContext();
    

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        const storedvalue = localStorage.getItem('theme');
        return storedvalue ? storedvalue : 'light';
    })

    useEffect(() => {
        localStorage.setItem('theme', theme);
    },[theme])

    const toggletheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
  
   
    return (

        <ThemeContext.Provider  value={{theme, toggletheme}}>
            {children}
        </ThemeContext.Provider>

    )

}
