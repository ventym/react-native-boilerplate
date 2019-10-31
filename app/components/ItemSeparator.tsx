import React from 'react';
import { StyleSheet, View } from 'react-native';

const ItemSeparator: React.FC = () => <View style={styles.itemSeparator}/>;

export default ItemSeparator;

const styles = StyleSheet.create({
    itemSeparator: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'silver',
        marginLeft: 12,
    },
});
