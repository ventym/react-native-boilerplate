import React, { useCallback, useContext } from 'react';
import {
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
import { ThemeContext } from 'app/theme';

const NasaRoverListScreen: React.FC = () => {
    const isLoading = useSelector<IState, boolean>(state => state.nasa.isLoading);
    const roverList = useSelector<IState, INasaRover[]>(state => state.nasa.roverIdList.map(id => state.nasa.roverList[id]));

    const dispatch = useDispatch();
    const refetchNasaData = useCallback(() => {
        dispatch(thunks.fetchNasaData());
    }, [dispatch]);

    const navigation = useNavigation();
    const onPressRover = useCallback((rover: INasaRover) => () => {
        navigation.navigate('NasaPhotoListScreen', {
            filterBy: 'ROVER',
            filterId: rover.id,
            title: rover.name,
        });
    }, [navigation]);

    const theme = useContext(ThemeContext);

    return (
        <FlatList
            style={theme.styles.screenContainer}
            contentContainerStyle={roverList.length === 0 && theme.styles.flex1pad8}
            data={roverList}
            // FIXME: renderItem={RoverListItem} - после того как FlatList станет нормально работать с FC
            renderItem={({ item }) => (
                <RoverListItem
                    rover={item}
                    onPress={onPressRover(item)}
                />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={NoDataView}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchNasaData}/>}
        />
    );
};

export default NasaRoverListScreen;
