// import { Theme } from 'react-native-elements';

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
        background: 'tomato',
        primary: 'tomato',
        accent: 'yellow',
        appMessage,
    },
};

export default theme;
