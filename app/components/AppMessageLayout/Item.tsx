import React, { useCallback, useRef, useContext, useMemo } from 'react';
import {
    StyleSheet,
    View,
    Text,
    LayoutChangeEvent,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { IAppMessage, IAppMessageType } from 'app/state/types';
import actions from 'app/actions';
import useTimer from 'app/utils/useTimer';
import useCollapseAnimation from 'app/utils/useCollapseAnimation';
import { ThemeContext } from 'app/theme';

interface IProps {
    item: IAppMessage;
}

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

    const { height, setHeight, startAnimation } = useCollapseAnimation(200, deleteMessage);

    useTimer(startAnimation, props.item.lifetime, true);

    const isMeasured = useRef<boolean>(false); // если true, то размер компонента уже измерян
    const onLayout = useCallback((event: LayoutChangeEvent) => {
        if (!isMeasured.current) {
            isMeasured.current = true;
            setHeight(event.nativeEvent.layout.height);
        }
    }, [setHeight, isMeasured.current]);

    const theme = useContext(ThemeContext);

    const iconName = MESSAGE_ICON[props.item.type];
    const containerStyle = useMemo(() => {
        const backgroundColor = theme.colors.appMessageBackground[props.item.type];
        return StyleSheet.flatten([styles.container, { backgroundColor }]);
    }, [styles.container, theme.colors.appMessageBackground, props.item.type]);

    return (
        <TouchableWithoutFeedback
            onPress={startAnimation}
        >
            <Animated.View style={{ overflow: 'hidden', height }}>
                <View style={containerStyle} onLayout={onLayout}>
                    <View style={styles.iconContainer}>
                        <Icon
                            name={iconName}
                            size={24}
                            color={theme.colors.appMessageIcon}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={theme.styles.appMessageText}>{props.item.text}</Text>
                    </View>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default AppMessageItem;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        padding: 8,
        bottom: 0,
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
});
