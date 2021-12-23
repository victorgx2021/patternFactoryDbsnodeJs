import {interfaceBD} from './interfaceBD';
import {PersonasControler} from './dbMySQL/DbMySQL';

export class DbFactory{
    constructor(){
    }

    public getDb(s : String):interfaceBD{
        if(s=='MySQL'){
            console.log("db usada: MySQL");
            return new PersonasControler();
        }
        console.log("no deberìa devolver db");
        return new PersonasControler();
        //return null;
    }
}