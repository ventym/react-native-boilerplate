import React, { useCallback, useContext } from 'react';
import {
    RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { IState, IClient } from 'app/state/types';
import thunks from 'app/thunks';
import NoDataView from 'app/components/NoDataView';
import ClientItem from './ClientItem';
import ItemSeparator from 'app/components/ItemSeparator';
import { ThemeContext } from 'app/theme';

const ClientListScreen: React.FC = () => {
    const clientList = useSelector<IState, IClient[]>(state => state.client.list);
    const isLoading = useSelector<IState, boolean>(state => state.client.isLoading);

    const dispatch = useDispatch();
    const refetchClientList = useCallback(() => {
        dispatch(thunks.fetchClientList());
    }, []);

    const theme = useContext(ThemeContext);

    return (
        <FlatList
            style={theme.styles.screenContainer}
            contentContainerStyle={clientList.length === 0 && theme.styles.flex1pad8}
            data={clientList}
            // FIXME: renderItem={ClientItem} - после того как FlatList станет нормально работать с FC
            renderItem={({ item }) => <ClientItem item={item}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={NoDataView}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetchClientList}/>}
        />
    );
};

export default ClientListScreen;
