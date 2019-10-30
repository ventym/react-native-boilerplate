import React from 'react';
import { View, Text } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

import { ParamList } from 'app/navigation/types';
import AppMessageLayout from 'app/components/AppMessageLayout';
import BlablaList from 'app/screens/BlablaList';
import BlablaDetails from 'app/screens/BlablaDetails';
import Settings from 'app/screens/Settings';

const BlablaStack = createStackNavigator<ParamList>();

console.log('header', Header);

const AppNavigation: React.FC = () => {
    return (
        <NavigationNativeContainer>
            <AppMessageLayout>
                <BlablaStack.Navigator>
                    <BlablaStack.Screen name='BlablaList' component={BlablaList} />
                    <BlablaStack.Screen name='BlablaDetails' component={BlablaDetails} />
                    <BlablaStack.Screen name='Settings' component={Settings} />
                </BlablaStack.Navigator>
            </AppMessageLayout>
        </NavigationNativeContainer>
    );
};

export default AppNavigation;
