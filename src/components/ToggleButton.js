import React from 'react';
import useThemeProvider from './hooks/useThemeProvider';

const ToggleButton = () => {

    const { mode, toggleMode } = useThemeProvider();

    return (
        <button onClick={toggleMode}>
            <h2>{mode}</h2>
        </button>
    );
}

export default ToggleButton;