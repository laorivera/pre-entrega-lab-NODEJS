import express from 'express';

export class Server {
    #APP = express();
    #PORT = 3333;

    constructor() {
    }

    addRoute(path, router) {
        this.#APP.use(path, router);
    }

    start() {
        this.#APP.listen(this.#PORT, () => {
            console.log('Server running on port', this.#PORT);
        });
    }
}