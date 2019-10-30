import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const LoadingView: React.FC = () => {
    return (
        <View style={styles.screenContainer}>
            <ActivityIndicator
                size='large'
                color='black'
            />
        </View>
    )
};

export default LoadingView;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
