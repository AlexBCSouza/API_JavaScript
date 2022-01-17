const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const req = require('express/lib/request');

class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();

    }
    middleware() {
        this.app.use(express.json());

        this.app.use((req, res, next) =>{
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE");
            res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With");
            this.app.use(cors());
            next();
        })

    }

    routes() {
        this.app.use(routes);

    }
}
module.express = new App().app;