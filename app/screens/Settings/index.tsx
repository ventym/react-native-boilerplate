import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Settings: React.FC = () => {
    return (
        <ScrollView style={styles.screenContainer}>
            <Text style={styles.text}>Settings</Text>
        </ScrollView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        color: 'black',
    }
});
