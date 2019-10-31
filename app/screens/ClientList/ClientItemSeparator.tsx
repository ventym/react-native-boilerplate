import React from 'react';
import { StyleSheet, View } from 'react-native';

const ClientItemSeparator: React.FC = () => <View style={styles.itemSeparator}/>;

export default ClientItemSeparator;

const styles = StyleSheet.create({
    itemSeparator: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'silver',
        marginLeft: 12,
    },
});
