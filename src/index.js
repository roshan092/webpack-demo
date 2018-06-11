import {join} from 'lodash';
import Constants from './constants';

function component() {
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
}

function serviceUrl() {
    const element = document.createElement('div');
    element.innerHTML = join([
        Constants.CONTEXT_PATH,
        Constants.API_BASE_URL
    ], ' ');
    return element;
}

document.body.appendChild(component());
document.body.appendChild(serviceUrl());