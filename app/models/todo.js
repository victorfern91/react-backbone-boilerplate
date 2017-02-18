import { Model } from 'backbone';

export default class TodoModel extends Model {

  constructor(attr) {
    super(attr);
    this.defaults = {
      name: 'your task name here',
      done: false,
      likes: 0,
    };
  }

  incrementLike() {
    const like = this.get('likes');
    this.set('likes', like + 1);
  }
}
