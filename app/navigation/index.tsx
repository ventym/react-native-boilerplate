import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useTranslation } from 'react-i18next';
import { ParamList } from 'app/navigation/types';
import AppMessageLayout from 'app/components/AppMessageLayout';
import BlablaListScreen from 'app/screens/BlablaList';
import BlablaDetailsScreen from 'app/screens/BlablaDetails';
import SettingsScreen from 'app/screens/Settings';

const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 14,
    },
    headerTitle: {
        fontSize: 16,
    },
});

const BlablaStack = createStackNavigator<ParamList>();
const BlablaStackScreen: React.FC = () => {
    const { t } = useTranslation();

    return (
        <BlablaStack.Navigator
            screenOptions={{
                headerTitleStyle: styles.headerTitle,
            }}
        >
            <BlablaStack.Screen
                name='BlablaListScreen'
                component={BlablaListScreen}
                options={{
                    title: t('BlablaListScreen:screenTitle'),
                }}
            />
            <BlablaStack.Screen
                name='BlablaDetailsScreen'
                component={BlablaDetailsScreen}
                options={{
                    title: t('BlablaDetailsScreen:screenTitle'),
                }}
            />
        </BlablaStack.Navigator>
    );
};

const SettingsStack = createStackNavigator<ParamList>();
const SettingsStackScreen: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerTitleStyle: styles.headerTitle,
            }}
        >
            <SettingsStack.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    title: t('SettingsScreen:screenTitle'),
                }}
            />
        </SettingsStack.Navigator>
    );
};

const MainTab = createBottomTabNavigator();
const MainTabScreen: React.FC = () => {
    const { t } = useTranslation();

    return (
        <MainTab.Navigator
            tabBarOptions={{
                labelStyle: styles.tabLabel,
            }}
        >
            <MainTab.Screen
                name='BlablaStackScreen'
                component={BlablaStackScreen}
                options={{
                    title: t('tabBar:blablaList'),
                    tabBarIcon: (props) => <Icon name='user-friends' size={16} color={props.color}/>,
                }}
            />
            <MainTab.Screen
                name='SettingsStackScreen'
                component={SettingsStackScreen}
                options={{
                    title: t('tabBar:settings'),
                    tabBarIcon: (props) => <Icon name='cog' size={16} color={props.color} light/>,
                }}
            />
        </MainTab.Navigator>
    );
};

const AppNavigation: React.FC = () => {
    return (
        <NavigationNativeContainer>
            <AppMessageLayout>
                <MainTabScreen/>
            </AppMessageLayout>
        </NavigationNativeContainer>
    );
};

export default AppNavigation;
