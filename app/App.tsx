import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ThemeProvider from 'app/theme';
import thunks from 'app/thunks';
import buildStore from 'app/state';
import AppNavigation from 'app/navigation';

import 'app/i18n';

const store = buildStore((dispatch) => {
    dispatch(thunks.fetchClientList());
    dispatch(thunks.fetchNasaData());
});

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider>
                <SafeAreaProvider>
                    <AppNavigation/>
                </SafeAreaProvider>
            </ThemeProvider>
        </ReduxProvider>
    );
};

export default App;
