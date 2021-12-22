import { Router } from "express";

import personasControler from "../controllers/personasController";

class PersonasRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',personasControler.list);
        this.router.get('/:id',personasControler.getOne);
        this.router.post('/',personasControler.create);
        this.router.delete('/:id',personasControler.delete);
        this.router.put('/:id',personasControler.update);
    }
}

const personasRoutes = new PersonasRoutes();
export default personasRoutes.router;