"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
const auth_1 = require("../middleware/auth");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', usuariosController_1.usuariosController.create);
        this.router.put('/actualizar/:id', usuariosController_1.usuariosController.actualizar);
        this.router.delete('/eliminar/:id', usuariosController_1.usuariosController.eliminar);
        this.router.get('/', auth_1.validarToken, usuariosController_1.usuariosController.list);
        this.router.get('/:id', usuariosController_1.usuariosController.listOne);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
