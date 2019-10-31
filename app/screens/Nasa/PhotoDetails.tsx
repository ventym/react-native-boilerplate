import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { useSelector } from 'react-redux';

import { IState, INasaPhoto } from 'app/state/types';
import NoDataView from 'app/components/NoDataView';
import { useTranslation } from 'react-i18next';

interface IProps {
    width: number;
    id: string;
}

const PhotoDetails: React.FC<IProps> = (props) => {
    const { t } = useTranslation('NasaPhotoDetailsScreen');

    const photo = useSelector<IState, INasaPhoto | undefined>(state => state.nasa.photoList[props.id]);
    if (!photo) return <NoDataView/>;

    return (
        <View style={[styles.screenContainer, { width: props.width }]}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{t('photoId')}: {photo.id}</Text>
                <Text style={styles.text}>{t('roverName')}: {photo.roverName}</Text>
                <Text style={styles.text}>{t('cameraFullName')}: {photo.cameraFullName}</Text>
                <Text style={styles.text}>{t('earthDate')}: {photo.earthDate}</Text>
                <Text style={styles.text}>{t('sol')}: {photo.sol.toString()}</Text>
            </View>
            <View style={styles.photoContainer}>
                <Image
                    style={styles.photoImage}
                    source={{ uri: photo.imgSrc }}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
};

export default PhotoDetails;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    textContainer: {
        padding: 8,
    },
    text: {
        fontSize: 16,
        color: 'black',
        lineHeight: 26,
    },
    photoContainer: {
        flex: 1,
        padding: 8,
    },
    photoImage: {
        flex: 1,
    },
});
