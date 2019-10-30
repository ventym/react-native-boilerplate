import React from 'react';
import { StyleSheet, View } from 'react-native';

const EmptyView: React.FC = () => {
    return (
        <View style={styles.screenContainer}/>
    )
};

export default EmptyView;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: 'white',
    },
});
