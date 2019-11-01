import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'app/theme';

const EmptyView: React.FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <View style={theme.styles.screenContainer}/>
    )
};

export default EmptyView;
