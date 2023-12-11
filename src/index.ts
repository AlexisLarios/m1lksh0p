import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import ventasRoutes from './routes/ventasRoutes';
import rolesRoutes from './routes/rolesRoutes';
import productosRoutes from './routes/productosRoutes';
import modalidadRoutes from './routes/modalidadRoutes';
import clientesRoutes from './routes/clientesRoutes';
import carritoRoutes from './routes/carritoRoutes';
import morgan from 'morgan';
import cors from 'cors';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}
config (): void
{
this.app.set('port',process.env.PORT|| 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
}
routes (): void
{
this.app.use(indexRoutes);
this.app.use('/api/usuarios',usuariosRoutes);
this.app.use('/api/ventas',ventasRoutes);
this.app.use('/api/roles',rolesRoutes);
this.app.use('/api/productos',productosRoutes);
this.app.use('/api/modalidad',modalidadRoutes);
this.app.use('/api/clientes',clientesRoutes);
this.app.use('/api/carrito',carritoRoutes);

}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('Server on port',this.app.get('port'));
});
}
}
const server = new Server();
server.start();