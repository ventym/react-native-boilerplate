import React, { useCallback, useContext } from 'react';
import {
    Text,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import actions from 'app/actions';
import thunks from 'app/thunks';
import { ThemeContext } from 'app/theme';

const SettingsScreen: React.FC = () => {
    const { t } = useTranslation('SettingsScreen');

    const dispatch = useDispatch();
    const changeLanguage = useCallback(() => {
        dispatch(thunks.changeLanguage());
    }, [dispatch]);

    const changeTheme = useCallback(() => {
        dispatch(actions.settings.toggleTheme());
    }, [dispatch]);

    const generateRandomAppMessage = useCallback(() => {
        dispatch(thunks.generateRandomAppMessage());
    }, [dispatch]);

    const theme = useContext(ThemeContext);

    return (
        <ScrollView
            style={theme.styles.screenContainer}
            contentContainerStyle={theme.styles.flex1pad8}
        >
            <TouchableOpacity onPress={changeLanguage} style={{ paddingVertical: 8 }}>
                <Text style={theme.styles.link}>{t('changeLanguage')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeTheme} style={{ paddingVertical: 8 }}>
                <Text style={theme.styles.link}>{t('changeTheme')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={generateRandomAppMessage} style={{ paddingVertical: 8 }}>
                <Text style={theme.styles.link}>{t('generateRandomAppMessage')}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SettingsScreen;
