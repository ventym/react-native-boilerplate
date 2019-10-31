import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { IState, INasaPhoto } from 'app/state/types';
import PhotoItemStatus from './PhotoItemStatus';

interface IProps {
    id: string;
    onPress?: () => void;
}

const PhotoItem: React.FC<IProps> = (props) => {
    const photo = useSelector<IState, INasaPhoto | undefined>(state => state.nasa.photoList[props.id]);
    if (!photo) return null;

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{photo.id}</Text>
            <Text style={styles.subtext}>{`${photo.roverName} / ${photo.cameraFullName}`}</Text>
            <Text style={styles.subtext}>{photo.earthDate}</Text>
            <PhotoItemStatus loadStatus={photo.loadStatus}/>
        </TouchableOpacity>
    );
};

export default PhotoItem;

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
