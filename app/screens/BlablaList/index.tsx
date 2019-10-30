import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { IState, IBlabla } from 'app/state/types';
import fetchBlablaList from 'app/thunks/fetchBlablaList';
import LoadingView from 'app/components/LoadingView';
import NoDataView from 'app/components/NoDataView';
import BlablaItem from 'app/screens/BlablaList/BlablaItem';

const BlablaList: React.FC = () => {
    const blablaList = useSelector<IState, IBlabla[]>(state => state.blabla.list);
    const isLoaded = useSelector<IState, boolean>(state => state.blabla.isLoaded);
    const isLoading = useSelector<IState, boolean>(state => state.blabla.isLoading);

    const dispatch = useDispatch();
    const refetchBlablaList = useCallback(() => {
        dispatch(fetchBlablaList());
    }, []);

    if (!isLoaded && isLoading) return <LoadingView/>;

    return (
        <FlatList
            style={styles.screenContainer}
            contentContainerStyle={{ flex: 1 }}
            data={blablaList}
            // FIXME: renderItem={BlablaItem} - после того как FlatList станет нормально работать с FC
            renderItem={({ item }) => <BlablaItem item={item}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={BlablaItemSeparator}
            ListEmptyComponent={NoDataView}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchBlablaList}/>}
        />
    );
};

export default BlablaList;

const BlablaItemSeparator: React.FC = () => <View style={styles.itemSeparator}/>;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: 'white',
    },
    itemSeparator: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'gray',
    },
});
