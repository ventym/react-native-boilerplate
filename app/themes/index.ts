import { IAppMessageType } from 'app/state/types';

const appMessage: Record<IAppMessageType, string> = {
    'INFO': 'darkcyan',
    'WARN': 'goldenrod',
    'ERROR': 'tomato',
};

const theme = {
    // ...DefaultTheme,
    colors: {
        // ...DefaultTheme.colors,
        background: 'aliceblue',
        primary: 'tomato',
        accent: 'yellow',
        appMessage,
    },
};

export default theme;
