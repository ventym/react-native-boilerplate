import React, { useCallback, useContext } from 'react';
import {
    RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import {
    IState,
    INasaCamera,
} from 'app/state/types';
import thunks from 'app/thunks';
import ItemSeparator from 'app/components/ItemSeparator';
import CameraListItem from './CameraListItem';
import NoDataView from 'app/components/NoDataView';
import { ThemeContext } from 'app/theme';

const NasaCameraListScreen: React.FC = () => {
    const isLoading = useSelector<IState, boolean>(state => state.nasa.isLoading);
    const cameraList = useSelector<IState, INasaCamera[]>(state => state.nasa.cameraIdList.map(id => state.nasa.cameraList[id]));

    const dispatch = useDispatch();
    const refetchNasaData = useCallback(() => {
        dispatch(thunks.fetchNasaData());
    }, []);

    const navigation = useNavigation();
    const onPressCamera = useCallback((camera: INasaCamera) => () => {
        navigation.navigate('NasaPhotoListScreen', {
            filterBy: 'CAMERA',
            filterId: camera.id,
            title: camera.fullName,
        });
    }, [navigation]);

    const theme = useContext(ThemeContext);

    return (
        <FlatList
            style={theme.styles.screenContainer}
            contentContainerStyle={cameraList.length === 0 && theme.styles.flex1pad8}
            data={cameraList}
            // FIXME: renderItem={CameraListItem} - после того как FlatList станет нормально работать с FC
            renderItem={({ item }) => (
                <CameraListItem
                    camera={item}
                    onPress={onPressCamera(item)}
                />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={NoDataView}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchNasaData}/>}
        />
    );
};

export default NasaCameraListScreen;
