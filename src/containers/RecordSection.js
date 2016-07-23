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
import * as recordActions from '../actions/recordActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import RecordButton from './../components/recordButton';
import color from '../colors';

class RecordSection extends Component {

    render() {
        const {state, actions} = this.props;

        var SelectedProject = <Text>no Project selected yet</Text>;
        var SelectedTask = <Text>no Task selected yet</Text>;

        if(state.records.selectedProject)
            SelectedProject = <Text>{state.records.selectedProject.name}</Text>;

        if(state.records.selectedTask)
            SelectedTask = <Text>{state.records.selectedTask.name}</Text>;

        return (
            <View style={styles.inputs}>
                <View style={styles.controlView}>
                    <Text>Project</Text>
                    {SelectedProject}
                    <Text>Task</Text>
                    {SelectedTask}
                </View>
                <View style={styles.startButton}>
                    <RecordButton status={state.records.status} {...actions} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: 'black',
        borderTopWidth: 1,
        backgroundColor: color.light_background,
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
    },
});

export default connect(
    state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators({...recordActions}, dispatch)
    })
)(RecordSection);