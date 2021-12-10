const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const req = require('express/lib/request');
const res = require('express/lib/response');

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json());


        this.app.use((req, res, next) => {
            res.header("access-Controll-Allow-Origin", "*");
            res.header("access-Controll-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("access-Controll-Allow-headers", "access, contenty-type, Authorization, Acept, Oringin, X-Requested-With");

            this.app.use(cors());
            next();
        })
    }
    routes() {
        this.app.use(routes);
    }
}
module.exports = new App().app;