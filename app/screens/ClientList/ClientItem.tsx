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
    item: IClient;
}

const ClientItem: React.FC<IProps> = (props) => {
    const navigation = useNavigation();

    const onPressItem = useCallback(() => {
        navigation.navigate('ClientDetailsScreen', { id: props.item.id });
    }, [navigation, props.item.id]);

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
                        source={{ uri: props.item.avatar }}
                        style={theme.styles.avatarImage}
                    />
                </View>
                <View style={theme.styles.containerPad4Center}>
                    <Text style={theme.styles.text}>{props.item.fullName}</Text>
                    <Text style={theme.styles.grayText}>{props.item.email}</Text>
                </View>
            </>
        </TouchableHighlight>
    );
};

export default ClientItem;
