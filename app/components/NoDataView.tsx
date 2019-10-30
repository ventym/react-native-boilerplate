import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NoDataView: React.FC = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.text}>Нет данных</Text>
        </View>
    )
};

export default NoDataView;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
});
