/* global document */
import Backbone from 'backbone';
import TodoController from './controllers/todoController';

class Router extends Backbone.Router {

  constructor() {
    super();
    this.el = document.getElementById('app-container');
    this.routes = {
      '': 'home',
    };
    this._bindRoutes();
    Backbone.history.start();
  }

  home() {
    this.controller = new TodoController({ el: this.el });
  }

}

export default Router;
