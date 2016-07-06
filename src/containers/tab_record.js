/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as recordActions from '../actions/recordActions';
import { connect } from 'react-redux';

import RecordButton from './../components/recordButton';
import color from '../colors';

class tab_record extends Component {

    render() {
        const { state, actions } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.filters}>
                    <View>
                        <Text>Filter</Text>
                        <Text>{state.record.status}</Text>
                    </View>
                </View>
                <View style={styles.inputs}>
                    <View style={styles.controlView}>
                        <Text>ControlView</Text>
                    </View>
                    <View style={styles.startButton}>
                        <RecordButton status={state.record.status} {...actions} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.dark_background,
    },
    filters: {
        flex: 3,
    },
    inputs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: 'black',
        borderTopWidth: 1,
        backgroundColor: color.light_background
    },
    controlView: {
        flex: 2,
        width: 50,
        alignItems: 'center',
    },
    startButton: {
        flex: 1,
        width: 50,
        alignItems: 'flex-start',
    }
});

export default connect(
    state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators(recordActions, dispatch)
    })
)(tab_record);