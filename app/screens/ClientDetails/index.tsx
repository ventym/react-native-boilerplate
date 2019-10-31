import React from 'react';
import {
    StyleSheet,
    // View,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, RouteProp } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { IState, IClient } from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import NoDataView from 'app/components/NoDataView';

const ClientDetailsScreen: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'ClientDetailsScreen'>>();

    const clientId = route.params && route.params.id ? route.params.id : undefined;
    const client = useSelector<IState, IClient | undefined>(state => state.client.list.find(client => client.id === clientId));

    const { t } = useTranslation('SettingsScreen');

    if (!client) {
        return <NoDataView/>;
    }

    return (
        <ScrollView
            style={styles.screenContainer}
            contentContainerStyle={styles.contentContainer}
        >
            <Text style={styles.text}>{client.fullName}</Text>
        </ScrollView>
    );
};

export default ClientDetailsScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    contentContainer: {
        padding: 8,
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
});
