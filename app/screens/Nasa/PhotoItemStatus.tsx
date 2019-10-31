import React from 'react';
import { Text } from 'react-native';

import { INasaPhotoLoadStatus } from 'app/state/types';

interface IProps {
    loadStatus: INasaPhotoLoadStatus;
}

const PhotoItemStatus: React.FC<IProps> = (props) => {
    if (props.loadStatus === 'LOADING') return <Text>loading...</Text>;
    if (props.loadStatus === 'LOADED') return <Text>loaded</Text>;
    if (props.loadStatus === 'NOT_LOADED') return <Text>X</Text>;
    return null;
};

export default PhotoItemStatus;
