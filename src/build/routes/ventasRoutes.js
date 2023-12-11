"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controllers/ventasController");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', ventasController_1.ventasController.create);
        this.router.put('/actualizar/:id', ventasController_1.ventasController.actualizar);
        this.router.delete('/eliminar/:id', ventasController_1.ventasController.eliminar);
        this.router.get('/', ventasController_1.ventasController.list);
        this.router.get('/:id', ventasController_1.ventasController.listOne);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
