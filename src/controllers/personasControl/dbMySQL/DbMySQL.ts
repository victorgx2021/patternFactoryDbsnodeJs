import {Request, Response, text} from 'express';
import pool from './database';
//import pool from '../dbSQL_Server/connection';


export class PersonasControler{
    public async list (req: Request,res: Response){
        const personas = await pool.query('SELECT * FROM persona');
        res.json(personas);
    }

    public async getOne(req:Request, res: Response){
        const {id} = req.params;
        const persona = await pool.query('SELECT * FROM persona WHERE id = ?',[id]);
        if(persona.length > 0){
            return res.json(persona);
        }
        res.status(404).json({text: "The person doesn't exists"});
    }

    public async create (req:Request, res:Response){
        await pool.query('INSERT INTO persona set ?',[req.body]);
        res.json({text: 'person saved'});
    }

    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM persona WHERE id = ?',[id]);
        res.json({message: 'The person was deleted'});
    }

    public async update (req:Request, res:Response){
        const {id} = req.params;
        await pool.query('UPDATE persona set ? WHERE id = ?',[req.body,id]);
        res.json({message: 'The person was updated'});
    }
}

//const personasControler =  new PersonasControler();
//export default personasControler;