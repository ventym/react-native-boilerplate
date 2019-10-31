import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import {
    IState,
    INasaPhoto,
} from 'app/state/types';
import thunks from 'app/thunks';

import ItemSeparator from 'app/components/ItemSeparator';
import CameraListItem from './CameraListItem';
import NoDataView from 'app/components/NoDataView';

const NasaCameraListScreen: React.FC = () => {
    const isLoading = useSelector<IState, boolean>(state => state.nasa.isLoading);
    const cameraIdList = useSelector<IState, string[]>(state => state.nasa.cameraIdList);

    const dispatch = useDispatch();
    const refetchNasaData = useCallback(() => {
        dispatch(thunks.fetchNasaData());
    }, []);

    return (
        <View style={styles.screenContainer}>
            <FlatList
                style={styles.listContainer}
                contentContainerStyle={cameraIdList.length === 0 && styles.noScrollContentContainer}
                data={cameraIdList}
                // FIXME: renderItem={CameraListItem} - после того как FlatList станет нормально работать с FC
                renderItem={({ item }) => <CameraListItem id={item}/>}
                keyExtractor={item => item}
                ItemSeparatorComponent={ItemSeparator}
                ListEmptyComponent={NoDataView}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchNasaData}/>}
            />
        </View>
    );
};

export default NasaCameraListScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    listContainer: {
        flex: 1,
    },
    noScrollContentContainer: {
        flex: 1,
    },
});
