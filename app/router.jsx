import Backbone from 'backbone';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';

class Router extends Backbone.Router {

    constructor() {
        super();
        this.routes = {
            '': 'home',
            'test': 'test'
        };
        this._bindRoutes();
    }

    navigateTo (variable) {
        console.log(`router: ${variable}`);
        render(<App text={variable} />, document.getElementById('app-container'));
    }

    home() {
        this.navigateTo('home');
    }

    test() {
        this.navigateTo('test');
    }
}

export default Router;
