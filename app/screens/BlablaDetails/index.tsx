import React from 'react';
import {
    StyleSheet,
    // View,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import { IState, IBlabla } from 'app/state/types';
import { ParamList } from 'app/navigation/types';
import NoDataView from 'app/components/NoDataView';

const BlablaDetails: React.FC = () => {
    // const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'BlablaDetails'>>();

    const blablaId = route.params && route.params.id ? route.params.id : undefined;
    const blabla = useSelector<IState, IBlabla | undefined>(state => state.blabla.list.find(blabla => blabla.id === blablaId));
    if (!blabla) {
        // navigation.goBack();
        return <NoDataView/>;
    }

    return (
        <ScrollView style={styles.screenContainer}>
            <Text>{blabla.fullName}</Text>
        </ScrollView>
    );
};

export default BlablaDetails;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: 'white',
    },
    // text: {
    //     fontSize: 16,
    //     color: 'black',
    // },
});
