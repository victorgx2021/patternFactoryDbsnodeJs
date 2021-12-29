import {Request, Response, text} from 'express';
//import {connect,mongoose} from './database';
import './database';
//import Persona from './models/persona';

import Persona from './models/persona'

export class PersonasControllerMongoDb{

    public async list (req: Request,res: Response){
        
        const personas = await Persona.find();
        
        console.log(personas);

        res.json(personas);
    } 

    public async getOne(req:Request, res: Response){

        const idAux=req.params.id;
        
        const persona = await Persona.find({id: idAux})

        if(persona.length > 0){
            return res.json(persona);
        }
        res.status(404).json({text: "The person doesn't exists"});
    }

    public async create (req:Request, res:Response){

        const persona = new Persona(req.body);
        const personaGuardada = await persona.save();

        console.log(personaGuardada);

        res.json({text: 'person saved'});
    }

    public async delete (req:Request,res:Response){

        const idAux=req.params.id;
        
        await Persona.deleteOne({id: idAux});

        res.json({message: 'The person was deleted'});
    }

    public async update (req:Request, res:Response){

        const idAux=req.params.id;

        const persona = new Persona(req.body);
        
        //await persona.updateOne({id: idAux},req.body);

        await Persona.findOneAndUpdate({id: idAux},req.body);

        res.json({message: 'The person was updated'});
    }
}