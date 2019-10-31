import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { IState, INasaRover } from 'app/state/types';

interface IProps {
    id: string;
}

const RoverItem: React.FC<IProps> = (props) => {
    const navigation = useNavigation();
    const rover = useSelector<IState, INasaRover | undefined>(state => state.nasa.roverList[props.id]);

    const onPressItem = useCallback(() => {
        navigation.navigate('NasaPhotoListScreen', {
            filterBy: 'ROVER',
            filterId: props.id,
            title: rover ? rover.name : '',
        });
    }, [navigation, props.id, rover]);


    if (!rover) return null;

    return (
        <TouchableOpacity style={styles.container} onPress={onPressItem}>
            <Text style={styles.text}>{rover.name}</Text>
            <Text style={styles.subtext}>{rover.status}</Text>
        </TouchableOpacity>
    );
};

export default RoverItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 8,
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
    subtext: {
        fontSize: 16,
        color: 'gray',
    },
});
