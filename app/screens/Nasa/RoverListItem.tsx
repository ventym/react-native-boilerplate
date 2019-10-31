import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { INasaRover } from 'app/state/types';

interface IProps {
    rover: INasaRover;
    onPress?: () => void;
}

const RoverItem: React.FC<IProps> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.rover.name}</Text>
            <Text style={styles.subtext}>{props.rover.status}</Text>
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
