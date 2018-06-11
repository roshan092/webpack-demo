import {join} from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
}

function serviceUrl() {
    const element = document.createElement('div');
    element.innerHTML = join([
        process.env.NODE_ENV,
        process.env.API_BASE_URL
    ], ' ');
    return element;
}

document.body.appendChild(component());
document.body.appendChild(serviceUrl());