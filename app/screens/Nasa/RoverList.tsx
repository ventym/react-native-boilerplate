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
import RoverListItem from './RoverListItem';
import NoDataView from 'app/components/NoDataView';

const NasaRoverListScreen: React.FC = () => {
    const isLoading = useSelector<IState, boolean>(state => state.nasa.isLoading);
    const roverIdList = useSelector<IState, string[]>(state => state.nasa.roverIdList);

    const dispatch = useDispatch();
    const refetchNasaData = useCallback(() => {
        dispatch(thunks.fetchNasaData());
    }, []);

    return (
        <View style={styles.screenContainer}>
            <FlatList
                style={styles.listContainer}
                contentContainerStyle={roverIdList.length === 0 && styles.noScrollContentContainer}
                data={roverIdList}
                // FIXME: renderItem={RoverListItem} - после того как FlatList станет нормально работать с FC
                renderItem={({ item }) => <RoverListItem id={item}/>}
                keyExtractor={item => item}
                ItemSeparatorComponent={ItemSeparator}
                ListEmptyComponent={NoDataView}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchNasaData}/>}
            />
        </View>
    );
};

export default NasaRoverListScreen;

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
