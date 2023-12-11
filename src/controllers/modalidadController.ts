import {Request,Response} from 'express';
import pool from '../database';
class ModalidadController
{

public async list(req: Request, res: Response ): Promise<void>{
const respuesta = await pool.query('SELECT * FROM modalidad');
res.json( respuesta );
}

public async listOne(req: Request, res: Response): Promise <void>{
const {id} = req.params;
const respuesta = await pool.query('SELECT * FROM modalidad WHERE id = ?', [id]);
if(respuesta.length>0){
res.json(respuesta[0]);
return ;
}
res.status(404).json({'mensaje': 'La modalidad no existe'});
}

public async create(req: Request, res: Response): Promise<void> {
const resp = await pool.query("INSERT INTO modalidad set ?", [req.body]);
res.json(resp);
}

public async actualizar(req: Request, res: Response): Promise<void> {
const { id } = req.params;
console.log(req.params);
const resp = await pool.query("UPDATE modalidad set ? WHERE id = ?", [req.body, id]);
res.json(resp);
}

public async eliminar(req: Request, res: Response): Promise<void> {
const { id } = req.params;
const resp = await pool.query(`DELETE FROM modalidad WHERE id = ${id}`);
res.json(resp);
}

}
export const modalidadController = new ModalidadController();