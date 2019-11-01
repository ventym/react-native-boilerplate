import React, { useCallback, useMemo, useContext } from 'react';
import {
    View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/core';

import { IState, INasaPhoto } from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import ItemSeparator from 'app/components/ItemSeparator';
import PhotoListItem from './PhotoListItem';
import NoDataView from 'app/components/NoDataView';
import { ThemeContext } from 'app/theme';

const NasaPhotoListScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'NasaPhotoListScreen'>>();
    const filterBy = route.params && route.params.filterBy ? route.params.filterBy : undefined;
    const filterId = route.params && route.params.filterId ? route.params.filterId : undefined;

    const photoList = useSelector<IState, Record<string, INasaPhoto>>(state => state.nasa.photoList);
    const filteredPhotoList = useMemo(() => {
        if (!filterBy || !filterId) return [];
        if (filterBy === 'CAMERA') return Object.values(photoList).filter(photo => photo.cameraId === filterId); // .map(photo => photo.id);
        if (filterBy === 'ROVER') return Object.values(photoList).filter(photo => photo.roverId === filterId); // .map(photo => photo.id);
        return [];
    }, [photoList, filterBy, filterId]);

    const navigateToPhotoDetailsSwipeableList = useCallback((index: number) => () => {
        navigation.navigate('NasaPhotoDetailsSwipeableListScreen', {
            filterBy,
            filterId,
            initialIndex: index,
        });
    }, [navigation, filterBy, filterId]);

    const theme = useContext(ThemeContext);

    return (
        <View style={theme.styles.screenContainer}>
            <FlatList
                style={theme.styles.flex1}
                contentContainerStyle={filteredPhotoList.length === 0 && theme.styles.flex1pad8}
                data={filteredPhotoList}
                // FIXME: renderItem={PhotoListItem} - после того как FlatList станет нормально работать с FC
                renderItem={({ item, index }) => (
                    <PhotoListItem
                        photo={item}
                        onPress={navigateToPhotoDetailsSwipeableList(index)}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ItemSeparator}
                ListEmptyComponent={NoDataView}
            />
        </View>
    );
};

export default NasaPhotoListScreen;
