import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'app/theme';

const ItemSeparator: React.FC = () => {
    const theme = useContext(ThemeContext);

    return <View style={theme.styles.itemSeparator}/>;
};

export default ItemSeparator;
