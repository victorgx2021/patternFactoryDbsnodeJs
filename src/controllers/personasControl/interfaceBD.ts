import {Request, Response} from 'express';

export interface interfaceBD{
    //list(req: Request,res: Response):any;
    //getOne(req: Request,res: Response):void;
    create(req: Request,res: Response):void;
    //delete(req: Request,res: Response):void;
    //update(req: Request,res: Response):void;
}