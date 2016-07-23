/**
 * Created by jakob on 06/07/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    status: types.STATUS_STOPPED,
    time: 0,
    selectedProject: null,
    selectedTask: null,
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
        case types.SELECT_PROJECT:
            return {
                ...state,
                selectedProject: action.payload,
            };
        case types.SELECT_TASK:
            return {
                ...state,
                selectedTask: action.payload,
            };
        case types.SELECT_RECENT:
            return {
                ...state,
                selectedProject: action.payload.project,
                selectedTask: action.payload.task,
            };
        default:
            return state;
    }
}