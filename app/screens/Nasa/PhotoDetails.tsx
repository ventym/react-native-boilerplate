import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { INasaPhoto } from 'app/state/types';
import { useTranslation } from 'react-i18next';

interface IProps {
    photo: INasaPhoto;
}

const PhotoDetails: React.FC<IProps> = (props) => {
    const { t } = useTranslation('NasaPhotoDetailsScreen');

    return (
        <View style={styles.screenContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{t('photoId')}: {props.photo.id}</Text>
                <Text style={styles.text}>{t('roverName')}: {props.photo.roverName}</Text>
                <Text style={styles.text}>{t('cameraFullName')}: {props.photo.cameraFullName}</Text>
                <Text style={styles.text}>{t('earthDate')}: {props.photo.earthDate}</Text>
                <Text style={styles.text}>{t('sol')}: {props.photo.sol.toString()}</Text>
            </View>
            <View style={styles.photoContainer}>
                <Image
                    style={styles.photoImage}
                    source={{ uri: props.photo.imgSrc }}
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
