import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { IClient } from 'app/state/types';

interface IProps {
    item: IClient;
}

const ClientItem: React.FC<IProps> = (props) => {
    const navigation = useNavigation();

    const onPressItem = useCallback(() => {
        navigation.navigate('ClientDetailsScreen', { id: props.item.id });
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
                <Text style={styles.text}>{props.item.fullName}</Text>
                <Text style={styles.email}>{props.item.email}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ClientItem;

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
    text: {
        fontSize: 16,
        color: 'black',
        lineHeight: 26,
    },
    email: {
        fontSize: 14,
        color: 'gray',
        lineHeight: 20,
    },
});
