import { Router } from 'express';
import { rolesController } from '../controllers/rolesController';
class RolesRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', rolesController.create);
    this.router.put('/actualizar/:id',rolesController.actualizar);
    this.router.delete('/eliminar/:id',rolesController.eliminar);
    this.router.get('/', rolesController.list );
    this.router.get('/:id', rolesController.listOne );
}
}
const rolesRoutes= new RolesRoutes();
export default rolesRoutes.router;