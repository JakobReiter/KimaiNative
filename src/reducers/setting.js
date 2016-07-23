/**
 * Created by jakob on 06/07/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    server: null,
    username: null,
    password: null,
};

export default function setting(state = initialState, action = {}) {

    switch (action.type) {
        case types.SAVE_SETTINGS:
            return {
                ...state,
                ...action.payload,
                apiURL: action.payload.server + "/core/json.php",
            };
        default:
            return state;
    }
}