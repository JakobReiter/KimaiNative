/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,  Text,  View } from 'react-native';
import Tabs from 'react-native-scrollable-tab-view';

import TabRecord from './containers/tab_record';
import TabSettings from './containers/tab_settings';
import TabTimeTable from './containers/tab_timetable';

import color from './colors';

export default class KimaiNative extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Tabs
                    style={styles.tabs}
                    tabBarPosition="top"
                    //tabBarBackgroundColor={color.light_background}
                    tabBarActiveTextColor={color.dark_highlight}
                    tabBarInactiveTextColor={color.inactive}
                    tabBarUnderlineColor={color.dark_highlight}
                >
                    <TabRecord tabLabel="Record" />
                    <TabTimeTable tabLabel="Timetable" />
                    <TabSettings tabLabel="Settings" />
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.light_background,
    },
    tabs: {
        paddingTop: 20,
        paddingBottom: 0,
    }
});