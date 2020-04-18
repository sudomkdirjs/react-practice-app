import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeProvider';

const useThemeProvider = () => {
    return useContext(ThemeContext);
};

export default useThemeProvider;