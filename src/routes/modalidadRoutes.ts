import { Router } from 'express';
import { modalidadController } from '../controllers/modalidadController';
class ModalidadRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', modalidadController.create);
    this.router.put('/actualizar/:id',modalidadController.actualizar);
    this.router.delete('/eliminar/:id',modalidadController.eliminar);
    this.router.get('/', modalidadController.list );
    this.router.get('/:id', modalidadController.listOne );
}
}
const modalidadRoutes= new ModalidadRoutes();
export default modalidadRoutes.router;