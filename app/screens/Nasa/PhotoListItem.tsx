import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { INasaPhoto } from 'app/state/types';
import PhotoItemStatus from './PhotoItemStatus';

interface IProps {
    photo: INasaPhoto;
    onPress?: () => void;
}

const PhotoItem: React.FC<IProps> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.photo.id}</Text>
            <Text style={styles.subtext}>{`${props.photo.roverName} / ${props.photo.cameraFullName}`}</Text>
            <Text style={styles.subtext}>{props.photo.earthDate}</Text>
            <PhotoItemStatus loadStatus={props.photo.loadStatus}/>
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
