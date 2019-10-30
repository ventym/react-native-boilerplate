import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import fetchBlablaList from 'app/thunks/fetchBlablaList';
import buildStore from 'app/state';
import theme from 'app/themes';
import AppNavigation from 'app/navigation';

const store = buildStore((dispatch) => {
    dispatch && dispatch(fetchBlablaList());
});

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <SafeAreaProvider>
                <PaperProvider theme={theme}>
                    <AppNavigation/>
                </PaperProvider>
            </SafeAreaProvider>
        </ReduxProvider>
    );
    // return (
    //     <>
    //         <StatusBar barStyle="dark-content" />
    //         <SafeAreaView>
    //             <ScrollView
    //                 contentInsetAdjustmentBehavior="automatic"
    //                 style={styles.scrollView}
    //             >
    //             </ScrollView>
    //         </SafeAreaView>
    //     </>
    // );
};

// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: 'white',
//     },
// });

export default App;
