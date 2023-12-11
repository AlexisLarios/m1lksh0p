"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', carritoController_1.carritoController.create);
        this.router.put('/actualizar/:id', carritoController_1.carritoController.actualizar);
        this.router.delete('/eliminar/:id', carritoController_1.carritoController.eliminar);
        this.router.get('/', carritoController_1.carritoController.list);
        this.router.get('/:id', carritoController_1.carritoController.listOne);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;
