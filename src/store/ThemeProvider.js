import React, { createContext, useState } from 'react';

const lightTheme = 'light';
const darkTheme = 'dark';

export const ThemeContext = createContext(lightTheme);

const { Provider } = ThemeContext;

const ThemeProvider = ({ children }) => {

    const [ mode, setMode ] = useState(lightTheme);

    const toggleMode = () => {
        setMode( mode === lightTheme ? darkTheme : lightTheme);
    }

    return <Provider value={{ mode, toggleMode }}>{children}</Provider>
}

export default ThemeProvider;