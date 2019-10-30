import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { default as thunkChangeLanguage } from 'app/thunks/changeLanguage';
import { useTranslation } from 'react-i18next';

const SettingsScreen: React.FC = () => {
    const { t } = useTranslation('SettingsScreen');

    const dispatch = useDispatch();
    const changeLanguage = useCallback(() => {
        dispatch(thunkChangeLanguage());
    }, []);

    return (
        <ScrollView
            style={styles.screenContainer}
            contentContainerStyle={styles.contentContainer}
        >
            <TouchableOpacity onPress={changeLanguage}>
                <Text style={styles.link}>{t('changeLanguage')}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    contentContainer: {
        padding: 8,
    },
    link: {
        fontSize: 16,
        color: 'dodgerblue',
    },
});
