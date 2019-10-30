import React, { useCallback } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    // View,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { IBlabla } from 'app/state/types';

interface IProps {
    item: IBlabla;
}

const BlablaItem: React.FC<IProps> = (props) => {
    const navigation = useNavigation();

    const onPressItem = useCallback(() => {
        navigation.navigate('BlablaDetails', { id: props.item.id });
    }, [navigation, props.item.id]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPressItem}>
            <Text>{props.item.fullName}</Text>
        </TouchableOpacity>
    );
};

export default BlablaItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 8,
    },
});
