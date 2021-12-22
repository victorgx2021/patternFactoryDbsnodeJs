import { Router } from "express";

import { indexControler } from "../controllers/indexController";

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',indexControler.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;