/**
 * Created by jakob on 06/07/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    status: types.STATUS_STOPPED,
    time: 0,
};

export default function filter(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOAD_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        case types.LOAD_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
}