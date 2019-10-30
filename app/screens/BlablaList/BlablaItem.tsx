import React, { useCallback } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
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
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: props.item.avatar }}
                    style={styles.avatarImage}
                />
            </View>
            <View style={styles.textContainer}>
                <Text>{props.item.fullName}</Text>
                <Text>{props.item.email}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BlablaItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 8,
    },
    avatarContainer: {
        padding: 4,
    },
    avatarImage: {
        overflow: 'hidden',
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    textContainer: {
        padding: 4,
        marginLeft: 4,
        justifyContent: 'center',
    },
});
