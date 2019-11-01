import React, { useContext } from 'react';
import {
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, RouteProp } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { IState, IClient } from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import NoDataView from 'app/components/NoDataView';
import { ThemeContext } from 'app/theme';

const ClientDetailsScreen: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'ClientDetailsScreen'>>();

    const clientId = route.params && route.params.id ? route.params.id : undefined;
    const client = useSelector<IState, IClient | undefined>(state => state.client.list.find(client => client.id === clientId));

    const { t } = useTranslation('SettingsScreen');

    const theme = useContext(ThemeContext);

    if (!client) {
        return <NoDataView/>;
    }

    return (
        <ScrollView
            style={theme.styles.screenContainer}
            contentContainerStyle={theme.styles.flex1pad8}
        >
            <Text style={theme.styles.text}>{client.fullName}</Text>
        </ScrollView>
    );
};

export default ClientDetailsScreen;
