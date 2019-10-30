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

import { IState, IBlabla } from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import NoDataView from 'app/components/NoDataView';

const BlablaDetailsScreen: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'BlablaDetailsScreen'>>();

    const blablaId = route.params && route.params.id ? route.params.id : undefined;
    const blabla = useSelector<IState, IBlabla | undefined>(state => state.blabla.list.find(blabla => blabla.id === blablaId));

    const { t } = useTranslation('SettingsScreen');

    if (!blabla) {
        return <NoDataView/>;
    }

    return (
        <ScrollView
            style={styles.screenContainer}
            contentContainerStyle={styles.contentContainer}
        >
            <Text style={styles.text}>{blabla.fullName}</Text>
        </ScrollView>
    );
};

export default BlablaDetailsScreen;

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
