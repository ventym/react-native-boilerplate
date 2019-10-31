import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import fetchClientList from 'app/thunks/fetchClientList';
import buildStore from 'app/state';
import AppNavigation from 'app/navigation';

import 'app/i18n';

const store = buildStore((dispatch) => {
    dispatch && dispatch(fetchClientList());
});

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <SafeAreaProvider>
                <AppNavigation/>
            </SafeAreaProvider>
        </ReduxProvider>
    );
};

export default App;
