import React, { createContext } from 'react';
import { useSelector } from 'react-redux';

import { IState } from 'app/state/types';
import defaultTheme from './defaultTheme';
import alterTheme from './alterTheme';
import { StatusBar } from 'react-native';

export const ThemeContext = createContext(defaultTheme);

const ThemeProvider: React.FC = (props) => {
    const themeName = useSelector<IState, string>(state => state.settings.themeName);

    const theme = themeName === 'alterTheme' ? alterTheme : defaultTheme;
    const barStyle = themeName === 'alterTheme' ? 'light-content' : 'dark-content';

    return (
        <ThemeContext.Provider value={theme}>
            <StatusBar barStyle={barStyle}/>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
