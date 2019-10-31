import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { INasaCamera } from 'app/state/types';

interface IProps {
    camera: INasaCamera;
    onPress?: () => void;
}

const CameraItem: React.FC<IProps> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.camera.fullName}</Text>
            <Text style={styles.subtext}>{props.camera.roverName}</Text>
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
