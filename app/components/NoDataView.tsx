import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'app/theme';

const NoDataView: React.FC = () => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);

    return (
        <View style={theme.styles.screenContainerPad8Center}>
            <Text style={theme.styles.text}>{t('ClientListScreen:noData')}</Text>
        </View>
    )
};

export default NoDataView;
