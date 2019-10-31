import React, { useCallback } from 'react';
import {
    StyleSheet,
    // View,
    RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { IState, IClient } from 'app/state/types';
import fetchClientList from 'app/thunks/fetchClientList';
// import LoadingView from 'app/components/LoadingView';
import NoDataView from 'app/components/NoDataView';
import ClientItem from './ClientItem';
import ClientItemSeparator from './ClientItemSeparator';

const ClientListScreen: React.FC = () => {
    const clientList = useSelector<IState, IClient[]>(state => state.client.list);
    // const isLoaded = useSelector<IState, boolean>(state => state.client.isLoaded);
    const isLoading = useSelector<IState, boolean>(state => state.client.isLoading);

    const dispatch = useDispatch();
    const refetchClientList = useCallback(() => {
        dispatch(fetchClientList());
    }, []);

    return (
        <FlatList
            style={styles.screenContainer}
            contentContainerStyle={clientList.length === 0 && styles.contentContainer}
            data={clientList}
            // FIXME: renderItem={ClientItem} - после того как FlatList станет нормально работать с FC
            renderItem={({ item }) => <ClientItem item={item}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ClientItemSeparator}
            ListEmptyComponent={NoDataView}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchClientList}/>}
        />
    );
};

export default ClientListScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    contentContainer: {
        flex: 1,
    },
});
