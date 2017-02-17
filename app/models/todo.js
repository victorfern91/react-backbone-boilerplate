import Backbone from 'backbone'

export default class TodoModel extends Backbone.Model {
    constructor() {
        super({
            defaults: {
                name: '',
                done: false
            }
        });
    }
}
