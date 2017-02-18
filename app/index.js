import Router from './router';

class BoilerPlateApp {
  constructor() {
    this.router = new Router();
  }
}

(() => {
  this.app = new BoilerPlateApp();
})();
