/* global document */
import Backbone from 'backbone';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

class Router extends Backbone.Router {

  constructor() {
    super();
    this.el = document.getElementById('app-container');
    this.routes = {
      '': 'home',
      route: 'test',
    };
    this._bindRoutes();
    Backbone.history.start();
  }

  navigateTo(variable) {
    render(<App text={variable} />, this.el);
  }

  home() {
    this.navigateTo('home');
  }

  test() {
    this.navigateTo('test');
  }
}

export default Router;
