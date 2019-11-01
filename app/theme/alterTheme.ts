import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import { IAppMessageType } from 'app/state/types';

const appMessageBackground: Record<IAppMessageType, string> = {
    'INFO': 'darkcyan',
    'WARN': 'goldenrod',
    'ERROR': 'tomato',
};

const alterTheme = {
    colors: {
        barStyle: 'light-content',
        background: '#20a0a0',
        highlightColor: '#40c0c0',
        appMessageIcon: 'white',
        appMessageBackground,
        activityIndicator: 'white',
        activeTintColor: 'gold',
        inactiveTintColor: 'lightblue',
        header: 'teal',
    },

    styles: StyleSheet.create({
        header: {
            backgroundColor: 'teal',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
        headerTitle: {
            fontSize: 16,
            color: 'white',
        },
        tab: {
            backgroundColor: 'teal',
            // borderTopColor: 'rgba(0, 0, 0, 0.3)',
        },
        tabLabel: {
            fontSize: 14,
        },
        screenContainer: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#20a0a0',
        },
        screenContainerPad8Center: {
            ...StyleSheet.absoluteFillObject,
            padding: 8,
            backgroundColor: '#20a0a0',
            justifyContent: 'center',
            alignItems: 'center',
        },
        flex1: {
            ...StyleSheet.absoluteFillObject,
        },
        flex1pad8: {
            ...StyleSheet.absoluteFillObject,
            padding: 8,
        },
        itemContainerPad8: {
            width: '100%',
            padding: 8,
        },
        itemContainerPad8Row: {
            flexDirection: 'row',
            width: '100%',
            padding: 8,
        },
        containerPad4: {
            padding: 4,
        },
        containerPad4Center: {
            ...StyleSheet.absoluteFillObject,
            padding: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 16,
            color: 'seashell',
        },
        grayText: {
            fontSize: 16,
            color: 'lightblue',
        },
        link: {
            fontSize: 16,
            color: 'yellow',
        },
        appMessageText: {
            fontSize: 16,
            color: 'white',
        },
        avatarImage: {
            overflow: 'hidden',
            width: 64,
            height: 64,
            borderRadius: 32,
        },
        itemSeparator: {
            width: '100%',
            height: StyleSheet.hairlineWidth,
            backgroundColor: 'silver',
            marginLeft: 12,
        },
    }),
};

export default alterTheme;
