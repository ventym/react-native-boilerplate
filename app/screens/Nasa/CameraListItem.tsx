import React, { useContext } from 'react';
import {
    Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { INasaCamera } from 'app/state/types';
import { ThemeContext } from 'app/theme';

interface IProps {
    camera: INasaCamera;
    onPress?: () => void;
}

const CameraItem: React.FC<IProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableHighlight
            style={theme.styles.itemContainerPad8}
            onPress={props.onPress}
            underlayColor={theme.colors.highlightColor}
        >
            <>
                <Text style={theme.styles.text}>{props.camera.fullName}</Text>
                <Text style={theme.styles.grayText}>{props.camera.roverName}</Text>
            </>
        </TouchableHighlight>
    );
};

export default React.memo(CameraItem);
