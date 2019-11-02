import React, { useContext } from 'react';
import {
    Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { INasaPhoto } from 'app/state/types';
import PhotoItemStatus from './PhotoItemStatus';
import { ThemeContext } from 'app/theme';

interface IProps {
    photo: INasaPhoto;
    onPress?: () => void;
}

const PhotoItem: React.FC<IProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableHighlight
            style={theme.styles.itemContainerPad8}
            onPress={props.onPress}
            underlayColor={theme.colors.highlightColor}
        >
            <>
                <Text style={theme.styles.text}>{props.photo.id}</Text>
                <Text style={theme.styles.grayText}>{`${props.photo.roverName} / ${props.photo.cameraFullName}`}</Text>
                <Text style={theme.styles.grayText}>{props.photo.earthDate}</Text>
                <PhotoItemStatus loadStatus={props.photo.loadStatus}/>
            </>
        </TouchableHighlight>
    );
};

export default React.memo(PhotoItem);
