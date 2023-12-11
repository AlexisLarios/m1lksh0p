import { Router } from 'express';
import { clientesController } from '../controllers/clientesController';
class ClientesRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', clientesController.create);
    this.router.put('/actualizar/:id',clientesController.actualizar);
    this.router.delete('/eliminar/:id',clientesController.eliminar);
    this.router.get('/', clientesController.list );
    this.router.get('/:id', clientesController.listOne );
}
}
const clientesRoutes= new ClientesRoutes();
export default clientesRoutes.router;