import React, { useContext } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { INasaPhotoLoadStatus } from 'app/state/types';
import { ThemeContext } from 'app/theme';

interface IProps {
    loadStatus: INasaPhotoLoadStatus;
}

const PhotoItemStatus: React.FC<IProps> = (props) => {
    const theme = useContext(ThemeContext);

    // TODO
    
    // if (props.loadStatus === 'LOADING') return <ActivityIndicator style={{ width: 8, height: 8 }} color={theme.colors.activityIndicator}/>;
    // if (props.loadStatus === 'LOADED') return <ActivityIndicator style={{ overflow: 'hidden', width: 10, height: 10 }} color={theme.colors.activityIndicator}/>;
    // if (props.loadStatus === 'NOT_LOADED') return <Text>X</Text>;
    return null;
};

export default React.memo(PhotoItemStatus);
