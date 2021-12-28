import {Request, Response} from 'express'
import {getConnection, sql} from './connection';

export class PersonasControllerSQL_Server{
    public async list (req: Request,res: Response){
        const pool = await getConnection();
        const personas = await pool?.request().query('SELECT * FROM persona');
        console.log(personas?.recordset)
        res.json(personas?.recordset);
    }

    public async getOne(req:Request, res: Response){
        const {id} = req.params;
        const pool = await getConnection();
        const persona = await pool?.request()
        .input('id',sql.Int,id)
        .query('SELECT * FROM persona WHERE id = @id');
        if(persona?.recordset.length! > 0){
            return res.json(persona?.recordset);
        }
        res.status(404).json({text: "The person doesn't exists"});
    }

    public async create (req:Request, res:Response){
        
        const {id, nombre} = req.body;

        if(id == null || nombre == null){
            return res.status(400).json({msg: 'Bad Request. Please Fill all fields.'});
        }

        const pool = await getConnection();
        await pool?.request().input('id', sql.Int,id)
        .input('nombre',sql.VarChar,nombre)
        .query('INSERT INTO Persona (id,nombre) VALUES (@id, @nombre)');
        res.json({text: 'person saved'});
    }

    public async delete (req:Request,res:Response){
        const {id} = req.params;
        const pool = await getConnection();
        await pool?.request().input('id',sql.Int,id).query('DELETE FROM persona WHERE id = @id');
        res.json({message: 'The person was deleted'});
    }

    public async update (req:Request, res:Response){
        
        const {id} = req.params;
        
        const {nombre} = req.body;
        
        const pool = await getConnection();

        await pool?.request().input('id', sql.Int,id)
        .input('nombre',sql.VarChar,nombre).query('UPDATE persona SET nombre = @nombre WHERE id = @id');
        
        res.json({message: 'The person was updated'});
    }
}
/*

    public async update (req:Request, res:Response){
        const {id} = req.params;
        await pool.query('UPDATE persona set ? WHERE id = ?',[req.body,id]);
        res.json({message: 'The person was updated'});
    }
}

//const personasControler =  new PersonasControler();
//export default personasControler;
/*/