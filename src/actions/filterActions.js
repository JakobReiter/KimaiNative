/**
 * Created by jakob on 10/07/16.
 */
import * as types from './actionTypes';
import KimaiRPC from '../util/kimairpc';

export function loadProjects(settings) {

    return function (dispatch) {
        
        client = new KimaiRPC(settings);
        client.call("getProjects")
            .then(function (response) {
                var result = response.data.result;
                if (result.success) {
                    dispatch(actionProject(result.items));
                }

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    };
}

function actionProject(payload) {
    return {
        type: types.LOAD_PROJECTS,
        payload,
    };
}

export function loadTasks(settings) {

    return function (dispatch) {
        client = new KimaiRPC(settings);
        client.call("getTasks")
            .then(function (response) {
                var result = response.data.result;
                if (result.success) {
                    dispatch(actionTalks(result.items));
                }

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    };
}

function actionTalks(payload) {
    return {
        type: types.LOAD_TASKS,
        payload,
    };
}


export function selectProject(item) {
    console.log("Select Project", item);
    return {
        type: types.SELECT_PROJECT,
        payload: item,
    }
}

export function selectTask(item) {
    console.log("Select Task", item);
    return {
        type: types.SELECT_TASK,
        payload: item,
    }
}

export function selectRecent(item) {
    console.log("Select Recent", item);
    return {
        type: types.SELECT_RECENT,
        payload: item,
    }
}