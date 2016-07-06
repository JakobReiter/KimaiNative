/**
 * Created by jakob on 07/07/16.
 */
import * as types from './actionTypes';

export function startRecording() {
    return {
        type: types.START
    };
}

export function stopRecording() {
    return {
        type: types.STOP
    };
}