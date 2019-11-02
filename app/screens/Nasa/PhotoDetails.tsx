import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { INasaPhoto } from 'app/state/types';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'app/theme';

interface IProps {
    photo: INasaPhoto;
}

const PhotoDetails: React.FC<IProps> = (props) => {
    const { t } = useTranslation('NasaPhotoDetailsScreen');
    const theme = useContext(ThemeContext);

    return (
        <View style={theme.styles.screenContainer}>
            <View style={styles.descriptionContainer}>
                <Text style={theme.styles.text}>{t('photoId')}: {props.photo.id}</Text>
                <Text style={theme.styles.text}>{t('roverName')}: {props.photo.roverName}</Text>
                <Text style={theme.styles.text}>{t('cameraFullName')}: {props.photo.cameraFullName}</Text>
                <Text style={theme.styles.text}>{t('earthDate')}: {props.photo.earthDate}</Text>
                <Text style={theme.styles.text}>{t('sol')}: {props.photo.sol.toString()}</Text>
            </View>
            <View style={styles.photoContainer}>
                <Image
                    style={styles.photoImage}
                    source={{ uri: props.photo.imgSrc }}
                    resizeMode='contain'
                    resizeMethod='resize'
                    // defaultSource={require('app/images/image.png')}
                    // loadingIndicatorSource={require('app/images/image.png')}
                />
            </View>
        </View>
    );
};

export default React.memo(PhotoDetails);

const styles = StyleSheet.create({
    descriptionContainer: {
        padding: 8,
    },
    photoContainer: {
        flex: 1,
        padding: 8,
    },
    photoImage: {
        flex: 1,
    },
});
