/**
 * Created by jakob on 07/07/16.
 */
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
    TouchableOpacity,
    Image
} from 'react-native';

import * as types from './../actions/actionTypes';

export default class recordButton extends Component {

    render() {
        if(this.props.status == types.STATUS_STOPPED)
        {
            return this.renderStart();
        } else {
            return this.renderStop();
        }

    }

    renderStart() {
        const { startRecording, stopRecording } = this.props;
        return (
            <TouchableOpacity onPress={startRecording} activeOpacity={1}>
                <Image
                    style={styles.button}
                    source={require('./../assets/recordButton_Play.png')}
                    //source={{uri: './../assets/recordButton.png', crop: {left: 0, top: 0, width: 75, height: 75}}}
                />
            </TouchableOpacity>
        )
    }

    renderStop() {
        const { startRecording, stopRecording } = this.props;
        return (
            <TouchableOpacity onPress={stopRecording} activeOpacity={1}>
                <Image
                    style={styles.button}
                    source={require('./../assets/recordButton_Stop.png')}
                    //source={{uri: './../assets/recordButton.png', crop: {left: 0, top: 0, width: 75, height: 75}}}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        padding: 10,
    },
});