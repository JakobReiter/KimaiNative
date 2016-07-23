/**
 * Created by jakob on 09/07/16.
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
} from 'react-native';
var {GiftedForm, GiftedFormManager} = require('react-native-gifted-form');
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import color from '../colors';
import * as settingActions from '../actions/settingsSaveActions';

class settingsForm extends Component {

    handleSubmit(isValid, values, validationResults, postSubmit = null, modalNavigator = null) {

        var errors = [];
        if (isValid === true) {
            this.props.actions.saveSettings(values);
        } else {
            for (var result in validationResults.results) {
                if (!validationResults.results.hasOwnProperty(result)) continue;

                result = validationResults.results[result];
                result.forEach((r) => {
                    if (!r.isValid) {
                        errors.push(r.message);
                    }
                });
            }
        }
        console.log("Errors", errors);
        postSubmit(errors);
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedForm
                    formName='settingsForm'
                    clearOnClose={false} // delete the values of the form when unmounted
                    defaults={{
                      server: '',
                      username: '',
                      password: '',
                    }}

                    validators={{
                          server: {
                            title: 'Server',
                            validate: [{
                              validator: 'matches',
                              arguments: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                              message: '{TITLE} is not a valid URL'
                            }]
                          },
                          username: {
                            title: 'Username',
                            validate: [{
                              validator: 'isLength',
                              arguments: [1, 200],
                              message: '{TITLE} must be between at least {ARGS[0]} characters'
                            },{
                              validator: 'matches',
                              arguments: /^[a-zA-Z0-9]*$/,
                              message: '{TITLE} can contains only alphanumeric characters'
                            }]
                          },
                          password: {
                            title: 'Password',
                            validate: [{
                              validator: 'isLength',
                              arguments: [1, 200],
                              message: '{TITLE} must be between at least {ARGS[0]} characters'
                            }]
                          },

                    }}
                >
                    <GiftedForm.SeparatorWidget />
                    <GiftedForm.TextInputWidget
                        name='server' // mandatory
                        title='Server'
                        placeholder='Server Address'
                        clearButtonMode='while-editing'
                    />

                    <GiftedForm.TextInputWidget
                        name='username'
                        title='Username'
                        placeholder='Username'
                        clearButtonMode='while-editing'
                    />

                    <GiftedForm.TextInputWidget
                        name='password' // mandatory
                        title='Password'
                        placeholder='******'
                        clearButtonMode='while-editing'
                        secureTextEntry={true}
                    />

                    <GiftedForm.SubmitWidget
                        title='Save'
                        widgetStyles={{submitButton: styles.submitButton}}
                        onSubmit={this.handleSubmit.bind(this)}
                    />
                </GiftedForm>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    submitButton: {
        backgroundColor: color.dark_highlight,
        margin: 0,
        marginTop: 10,
    }
});


export default connect(
    state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators(settingActions, dispatch)
    })
)(settingsForm);