/**
 * Created by jakob on 06/07/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    status: types.STATUS_STOPPED,
    time: 0,
};

export default function record(state = initialState, action = {}) {
    switch (action.type) {
        case types.START:
            return {
                ...state,
                status: types.STATUS_RECORDING
            };
        case types.STOP:
            return {
                ...state,
                status: types.STATUS_STOPPED
            };
        default:
            return state;
    }
}