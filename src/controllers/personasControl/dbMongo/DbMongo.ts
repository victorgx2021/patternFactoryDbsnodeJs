import {Request, Response, text} from 'express';
//import {connect,mongoose} from './database';
import './database';
import Persona from './models/persona';

export class PersonasControllerMongoDb{
    public async create (req:Request, res:Response){

        const persona = new Persona(req.body);
        //const pool = await connect();
        //await persona.save();
        const personaGuardada = await persona.save();
        console.log(personaGuardada);
        //await pool.query('INSERT INTO persona set ?',[req.body]);
        res.json({text: 'person saved'});
    }
}
/*export class PersonasControler{
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
}*/