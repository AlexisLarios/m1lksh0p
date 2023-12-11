import { Router } from 'express';
import { productosController } from '../controllers/productosController';
class ProductosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/create', productosController.create);
    this.router.put('/actualizar/:id',productosController.actualizar);
    this.router.delete('/eliminar/:id',productosController.eliminar);
    this.router.get('/', productosController.list );
    this.router.get('/:id', productosController.listOne );
}
}
const productosRoutes= new ProductosRoutes();
export default productosRoutes.router;