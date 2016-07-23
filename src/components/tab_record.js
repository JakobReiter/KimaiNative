/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

import RecordSection from '../containers/RecordSection';
import color from '../colors';
import FilterSection from '../containers/FilterSection';

class tab_record extends Component {

    render() {
        const {state, actions} = this.props;
        return (
            <View style={styles.container}>
                <FilterSection />
                <RecordSection />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.dark_background,
    },
});

export default tab_record;