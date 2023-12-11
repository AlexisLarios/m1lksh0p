import { Router } from 'express';
import { carritoController } from '../controllers/carritoController';
class CarritoRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', carritoController.create);
    this.router.put('/actualizar/:id',carritoController.actualizar);
    this.router.delete('/eliminar/:id',carritoController.eliminar);
    this.router.get('/', carritoController.list );
    this.router.get('/:id', carritoController.listOne );
}
}
const carritoRoutes= new CarritoRoutes();
export default carritoRoutes.router;