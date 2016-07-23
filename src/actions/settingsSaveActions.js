/**
 * Created by jakob on 07/07/16.
 */
import * as types from './actionTypes';
import KimaiRPC from '../util/kimairpc';

import {
    Alert,
} from 'react-native';

export function saveSettings(settings) {

    return function (dispatch) {

        client = new KimaiRPC(settings);

        return client.call("authenticate", [
            settings.username,
            settings.password,
        ])
            .then(function (response) {
                var result = response.data.result;
                if (result.success) {
                    settings.apiKey = result.items[0].apiKey;

                    Alert.alert(
                        'Settings',
                        'Successfully saved',
                    );
                    dispatch(save(settings))
                } else {

                    Alert.alert(
                        'Settings',
                        result.error.msg,
                    );
                    dispatch(save({
                        failed: true, error: result.error.msg
                    }))
                    ;
                }

            }.bind(this))
            .catch(function (error) {
                console.log(error);
                dispatch(save({failed: true, error}));
            });
    };
}

function save(settings) {
    return {
        type: types.SAVE_SETTINGS,
        payload: settings
    };
}