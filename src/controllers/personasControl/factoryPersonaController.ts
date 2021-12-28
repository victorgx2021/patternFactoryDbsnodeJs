import {interfaceBD} from './interfaceBD';
import {PersonasControler} from './dbMySQL/DbMySQL';
import {PersonasControllerSQL_Server} from './dbSQL_Server/DbSQL_Server'
import {PersonasControllerMongoDb} from './dbMongo/DbMongo'

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
        else if(s=='MongoDb'){
            console.log("db usada: MongoDB");
            return new PersonasControllerMongoDb();
        }
        console.log("no deberìa devolver db");
        return new PersonasControler();
        //return null;
    }
}