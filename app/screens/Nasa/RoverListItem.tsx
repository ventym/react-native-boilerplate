import React, { useContext } from 'react';
import {
    Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { INasaRover } from 'app/state/types';
import { ThemeContext } from 'app/theme';

interface IProps {
    rover: INasaRover;
    onPress?: () => void;
}

const RoverItem: React.FC<IProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableHighlight
            style={theme.styles.itemContainerPad8}
            onPress={props.onPress}
            underlayColor={theme.colors.highlightColor}
        >
            <>
                <Text style={theme.styles.text}>{props.rover.name}</Text>
                <Text style={theme.styles.grayText}>{props.rover.status}</Text>
            </>
        </TouchableHighlight>
    );
};

export default React.memo(RoverItem);
