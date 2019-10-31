import React, { useMemo } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute, RouteProp } from '@react-navigation/core';
import Swiper from 'react-native-swiper';

import {
    IState,
    INasaPhoto,
} from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import PhotoDetails from './PhotoDetails';

const NasaPhotoDetailsSwipeableListScreen: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'NasaPhotoDetailsSwipeableListScreen'>>();
    const filterBy = route.params && route.params.filterBy ? route.params.filterBy : undefined;
    const filterId = route.params && route.params.filterId ? route.params.filterId : undefined;
    const initialIndex = route.params && route.params.initialIndex ? route.params.initialIndex : 0;

    const photoList = useSelector<IState, Record<string, INasaPhoto>>(state => state.nasa.photoList);
    const filteredPhotoList = useMemo(() => {
        if (!filterBy || !filterId) return [];
        if (filterBy === 'CAMERA') return Object.values(photoList).filter(photo => photo.cameraId === filterId);
        if (filterBy === 'ROVER') return Object.values(photoList).filter(photo => photo.roverId === filterId);
        return [];
    }, [photoList, filterBy, filterId]);

    return (
        <View style={styles.screenContainer}>
            <Swiper
                showsPagination={false}
                showsButtons={false}
                autoplay={false}
                index={initialIndex}
            >
                {filteredPhotoList.map(photo => (
                    <PhotoDetails
                        key={photo.id}
                        photo={photo}
                    />
                ))}
            </Swiper>
        </View>
    );
};

export default NasaPhotoDetailsSwipeableListScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
});
