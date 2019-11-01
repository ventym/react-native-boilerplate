import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
// import { Header } from '@react-navigation/stack';
import { useSafeArea } from 'react-native-safe-area-context';

import { IState, IAppMessage } from 'app/state/types';
import AppMessageItem from './Item';
import { ThemeContext } from 'app/theme';

const AppMessageLayout: React.FC = (props) => {
    const messageList = useSelector<IState, IAppMessage[]>(state => state.appMessage.list);
    const insets = useSafeArea();
    const headerHeight = 44; // TODO

    return (
        <View style={styles.screenContainer}>
            <FlatList
                style={[styles.messageListContainer, { marginTop: insets.top + headerHeight }]}
                data={messageList}
                // FIXME: renderItem={AppMessageItem} - после того как FlatList станет нормально работать с FC
                renderItem={({item}) => (
                    <AppMessageItem
                        item={item}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ItemSeparator}
                bounces={false}
            />
            {props.children}
        </View>
    );
};

export default AppMessageLayout;

const ItemSeparator: React.FC = () => <View style={styles.itemsSeparator}/>

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    messageListContainer: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        width: '100%',
    },
    itemsSeparator: {
        height: 1,
        backgroundColor: 'transparent',
    },
});
