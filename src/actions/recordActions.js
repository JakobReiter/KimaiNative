/**
 * Created by jakob on 07/07/16.
 */
import * as types from './actionTypes';
import KimaiRPC from '../util/kimairpc';

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