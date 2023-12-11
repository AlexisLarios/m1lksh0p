"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modalidadController_1 = require("../controllers/modalidadController");
class ModalidadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', modalidadController_1.modalidadController.create);
        this.router.put('/actualizar/:id', modalidadController_1.modalidadController.actualizar);
        this.router.delete('/eliminar/:id', modalidadController_1.modalidadController.eliminar);
        this.router.get('/', modalidadController_1.modalidadController.list);
        this.router.get('/:id', modalidadController_1.modalidadController.listOne);
    }
}
const modalidadRoutes = new ModalidadRoutes();
exports.default = modalidadRoutes.router;
