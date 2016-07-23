/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import SettingsForm from '../containers/settingsForm';

export default class tab_settings extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SettingsForm/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
});
