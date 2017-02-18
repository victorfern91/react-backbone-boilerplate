import React from 'react';
import { render } from 'react-dom';

import TodoCollection from '../collections/todo';
import TodoView from '../screens/todo';

export default class TodoController {
  constructor(options) {
    this.collection = new TodoCollection();
    this.el = options.el;
    this.initalize();
  }

  initalize() {
    this.collection.on('reset', this.render, this);
    this.collection.fetch({ reset: true });
  }

  render() {
    render(<TodoView collection={this.collection} />, this.el);
  }
}
