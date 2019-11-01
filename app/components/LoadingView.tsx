import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ThemeContext } from 'app/theme';

const LoadingView: React.FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <View style={theme.styles.screenContainerPad8Center}>
            <ActivityIndicator
                size='large'
                color={theme.colors.activityIndicator}
            />
        </View>
    )
};

export default LoadingView;
