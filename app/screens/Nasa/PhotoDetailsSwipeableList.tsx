import React, { useCallback, useMemo, useState } from 'react';
import {
    StyleSheet,
    View,
    LayoutChangeEvent,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute, RouteProp } from '@react-navigation/core';

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

    const photoList = useSelector<IState, Record<string, INasaPhoto>>(state => state.nasa.photoList);
    const photoIdList = useMemo(() => {
        if (!filterBy || !filterId) return [];
        if (filterBy === 'CAMERA') return Object.values(photoList).filter(photo => photo.cameraId === filterId).map(photo => photo.id);
        if (filterBy === 'ROVER') return Object.values(photoList).filter(photo => photo.roverId === filterId).map(photo => photo.id);
        return [];
    }, [photoList, filterBy, filterId]);

    const [width, setWidth] = useState(0);
    const onLayout = useCallback((event: LayoutChangeEvent) => {
        setWidth(event.nativeEvent.layout.width);
    }, [setWidth]);

    const initialIndex = route.params && route.params.initialIndex ? route.params.initialIndex : 0;

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal={true}
                style={styles.screenContainer}
                data={photoIdList}
                // FIXME: renderItem={PhotoItem} - после того как FlatList станет нормально работать с FC
                renderItem={({ item }) => (
                    <PhotoDetails
                        id={item}
                        width={width}
                    />
                )}
                keyExtractor={item => item}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onLayout={onLayout}
                initialScrollIndex={initialIndex}
            />
        </View>
    );
};

export default NasaPhotoDetailsSwipeableListScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    noScrollContentContainer: {
        flex: 1,
    },
});
