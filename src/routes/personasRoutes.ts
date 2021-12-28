import { Router } from "express";

import {DbFactory} from '../controllers/personasControl/factoryPersonaController';
import {interfaceBD} from '../controllers/personasControl/interfaceBD';

class PersonasRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        let dbFactory: DbFactory = new DbFactory();
        //let dbController: interfaceBD = dbFactory.getDb("MySQL");
        //let dbController: interfaceBD = dbFactory.getDb("SQL_Server");
        let dbController: interfaceBD = dbFactory.getDb("MongoDb");

        //this.router.get('/',dbController.list);
        //this.router.get('/:id',dbController.getOne);
        this.router.post('/',dbController.create);
        //this.router.delete('/:id',dbController.delete);
        //this.router.put('/:id',dbController.update);
    }
}

const personasRoutes = new PersonasRoutes();
export default personasRoutes.router;