import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { IAppMessage, IAppMessageType } from 'app/state/types';
import actions from 'app/actions';
import useTimer from 'app/utils/useTimer';

interface IProps {
    item: IAppMessage;
}

const MESSAGE_BACKGROUND_COLOR: Record<IAppMessageType, string> = {
    'INFO': 'darkcyan',
    'WARN': 'goldenrod',
    'ERROR': 'tomato',
};

const MESSAGE_ICON: Record<IAppMessageType, string> = {
    'INFO': 'info-circle',
    'WARN': 'exclamation-circle',
    'ERROR': 'ban',
};

const AppMessageItem: React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
    const deleteMessage = useCallback(() => {
        dispatch(actions.appMessage.delete(props.item.id));
    }, [dispatch, props.item.id]);

    useTimer(deleteMessage, props.item.lifetime, true);

    const backgroundColor = MESSAGE_BACKGROUND_COLOR[props.item.type];
    const iconName = MESSAGE_ICON[props.item.type];

    return (
        <TouchableWithoutFeedback
            onPress={deleteMessage}
        >
            <View style={[styles.container, { backgroundColor }]}>
                <View style={styles.iconContainer}>
                    <Icon name={iconName} size={24} color='white'/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.item.text}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AppMessageItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
    },
    iconContainer: {
        padding: 8,
        paddingRight: 16,
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
});
