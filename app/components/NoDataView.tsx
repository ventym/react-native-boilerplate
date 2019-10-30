import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const NoDataView: React.FC = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.text}>{t('BlablaListScreen:noData')}</Text>
        </View>
    )
};

export default NoDataView;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
});
