import Router from './router.jsx';
import $ from 'jquery';

class BoilerPlateApp {

    constructor() {
        new Router();
        Backbone.history.start();
    }

}

$(() => {
    new BoilerPlateApp();
})
