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

import { IState, INasaCamera } from 'app/state/types';

interface IProps {
    id: string;
}

const CameraItem: React.FC<IProps> = (props) => {
    const navigation = useNavigation();
    const camera = useSelector<IState, INasaCamera | undefined>(state => state.nasa.cameraList[props.id]);

    const onPressItem = useCallback(() => {
        navigation.navigate('NasaPhotoListScreen', {
            filterBy: 'CAMERA',
            filterId: props.id,
            title: camera ? camera.fullName : '',
        });
    }, [navigation, props.id, camera]);


    if (!camera) return null;

    return (
        <TouchableOpacity style={styles.container} onPress={onPressItem}>
            <Text style={styles.text}>{camera.fullName}</Text>
            <Text style={styles.subtext}>{camera.roverName}</Text>
        </TouchableOpacity>
    );
};

export default CameraItem;

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
