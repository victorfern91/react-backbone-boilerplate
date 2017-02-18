import { Collection } from 'backbone';
import TodoModel from '../models/todo';

export default class TodoCollection extends Collection {
  constructor(attr) {
    super(attr);
    this.url = '/app/files/todo.json';
    this.model = TodoModel;
    Collection.apply(this);
  }

  incrementLike(taskName) {
    this.findWhere({ name: taskName }).incrementLike();
  }
}
