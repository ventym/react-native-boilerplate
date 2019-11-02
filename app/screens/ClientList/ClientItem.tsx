import React, { useCallback, useContext } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { IClient } from 'app/state/types';
import { ThemeContext } from 'app/theme';

interface IProps {
    client: IClient;
}

const ClientItem: React.FC<IProps> = (props) => {
    const navigation = useNavigation();

    const onPressItem = useCallback(() => {
        navigation.navigate('ClientDetailsScreen', {
            id: props.client.id,
            title: props.client.fullName,
        });
    }, [navigation, props.client.id, props.client.fullName]);

    const theme = useContext(ThemeContext);

    return (
        <TouchableHighlight
            style={theme.styles.itemContainerPad8Row}
            onPress={onPressItem}
            underlayColor={theme.colors.highlightColor}
        >
            <>
                <View style={theme.styles.containerPad4}>
                    <Image
                        source={{ uri: props.client.avatar }}
                        style={theme.styles.avatarImage}
                    />
                </View>
                <View style={theme.styles.containerPad4Center}>
                    <Text style={theme.styles.text}>{props.client.fullName}</Text>
                    <Text style={theme.styles.grayText}>{props.client.email}</Text>
                </View>
            </>
        </TouchableHighlight>
    );
};

export default ClientItem;
