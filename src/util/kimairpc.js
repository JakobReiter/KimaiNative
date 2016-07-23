/**
 * Created by jakob on 09/07/16.
 */

import axios from 'axios';
import React, {Component, PropTypes} from 'react';
import {} from 'react-native';
import {connect} from 'react-redux';

export default class KimaiRPC {

    constructor(settings) {
        this.settings = settings;
        this.endpoint = '/core/json.php';
        this.apiURL = this.settings.server + this.endpoint;
    }

    call(method, params) {
        params = params || [];

        if(this.settings.apiKey)
            params.push(this.settings.apiKey);

        console.log("Call:", method, params);

        return axios.post(this.apiURL, {
            "jsonrpc": "2.0",
            "method": method,
            "params": params,
            "id": 1
        });
    }
}