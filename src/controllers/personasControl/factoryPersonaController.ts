import {interfaceBD} from './interfaceBD';
import {PersonasControler} from './dbMySQL/DbMySQL';
import {PersonasControllerSQL_Server} from './dbSQL_Server/DbSQL_Server'

export class DbFactory{
    constructor(){
    }

    public getDb(s : String):interfaceBD{
        if(s=='MySQL'){
            console.log("db usada: MySQL");
            return new PersonasControler();
        }
        else if(s=='SQL_Server'){
            console.log("db usada: SQL Server");
            return new PersonasControllerSQL_Server();
        }
        console.log("no deberìa devolver db");
        return new PersonasControler();
        //return null;
    }
}