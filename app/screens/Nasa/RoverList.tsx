import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import {
    IState,
    INasaRover,
} from 'app/state/types';
import thunks from 'app/thunks';
import ItemSeparator from 'app/components/ItemSeparator';
import RoverListItem from './RoverListItem';
import NoDataView from 'app/components/NoDataView';

const NasaRoverListScreen: React.FC = () => {
    const isLoading = useSelector<IState, boolean>(state => state.nasa.isLoading);
    const roverList = useSelector<IState, INasaRover[]>(state => state.nasa.roverIdList.map(id => state.nasa.roverList[id]));

    const dispatch = useDispatch();
    const refetchNasaData = useCallback(() => {
        dispatch(thunks.fetchNasaData());
    }, []);

    const navigation = useNavigation();
    const onPressRover = useCallback((rover: INasaRover) => () => {
        navigation.navigate('NasaPhotoListScreen', {
            filterBy: 'ROVER',
            filterId: rover.id,
            title: rover.name,
        });
    }, [navigation]);

    return (
        <View style={styles.screenContainer}>
            <FlatList
                style={styles.listContainer}
                contentContainerStyle={roverList.length === 0 && styles.noScrollContentContainer}
                data={roverList}
                // FIXME: renderItem={RoverListItem} - после того как FlatList станет нормально работать с FC
                renderItem={({ item }) => <RoverListItem rover={item} onPress={onPressRover(item)}/>}
                keyExtractor={item => item.id}
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
