"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', productosController_1.productosController.create);
        this.router.put('/actualizar/:id', productosController_1.productosController.actualizar);
        this.router.delete('/eliminar/:id', productosController_1.productosController.eliminar);
        this.router.get('/', productosController_1.productosController.list);
        this.router.get('/:id', productosController_1.productosController.listOne);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
