import React, { Component } from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import KimaiNative from './KimaiNative';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <KimaiNative />
            </Provider>
        );
    }
}