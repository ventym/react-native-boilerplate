import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import { IAppMessageType } from 'app/state/types';

const appMessageBackground: Record<IAppMessageType, string> = {
    'INFO': 'darkcyan',
    'WARN': 'goldenrod',
    'ERROR': 'tomato',
};

const defaultTheme = {
    colors: {
        barStyle: 'dark-content',
        background: 'white',
        highlightColor: '#dfdfdf', // '#e0e8ef',
        appMessageIcon: 'white',
        appMessageBackground,
        activityIndicator: 'black',
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'gray',
        header: 'aliceblue',
    },

    styles: StyleSheet.create({
        header: {
            backgroundColor: 'aliceblue',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
        headerTitle: {
            fontSize: 16,
            color: 'black',
        },
        tab: {
            backgroundColor: 'aliceblue',
            // borderTopColor: 'rgb(218, 225, 231)',
        },
        tabLabel: {
            fontSize: 14,
        },
        screenContainer: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'white',
        },
        screenContainerPad8Center: {
            ...StyleSheet.absoluteFillObject,
            padding: 8,
            backgroundColor: 'white',
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
            color: 'black',
        },
        grayText: {
            fontSize: 16,
            color: 'gray',
        },
        link: {
            fontSize: 16,
            color: 'dodgerblue',
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

export default defaultTheme;
