import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController';
import { validarToken } from '../middleware/auth';
class UsuariosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', usuariosController.create);
    this.router.put('/actualizar/:id',usuariosController.actualizar);
    this.router.delete('/eliminar/:id',usuariosController.eliminar);
    this.router.get('/', usuariosController.list );
    this.router.get('/:id', usuariosController.listOne );
}
}
const usuariosRoutes= new UsuariosRoutes();
export default usuariosRoutes.router;