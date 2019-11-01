import React, { useMemo, useContext } from 'react';
import {
} from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute, RouteProp } from '@react-navigation/core';
import ViewPager from '@react-native-community/viewpager';

import {
    IState,
    INasaPhoto,
} from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import PhotoDetails from './PhotoDetails';
import { ThemeContext } from 'app/theme';

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

    const theme = useContext(ThemeContext);

    return (
        <ViewPager
            style={theme.styles.screenContainer}
            initialPage={initialIndex}
        >
            {filteredPhotoList.map(photo => (
                <PhotoDetails
                    key={photo.id}
                    photo={photo}
                />
            ))}
        </ViewPager>
    );
};

export default NasaPhotoDetailsSwipeableListScreen;
