import { Router } from 'express';
import { ventasController } from '../controllers/ventasController';
class VentasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', ventasController.create);
    this.router.put('/actualizar/:id',ventasController.actualizar);
    this.router.delete('/eliminar/:id',ventasController.eliminar);
    this.router.get('/', ventasController.list );
    this.router.get('/:id', ventasController.listOne );
}
}
const ventasRoutes= new VentasRoutes();
export default ventasRoutes.router;