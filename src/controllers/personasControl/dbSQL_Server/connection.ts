import sql from 'mssql';

const dbSettings= {
    user: 'root',
    password: 'root',    
    server: 'localhost',
    database: 'PersonasSQL_Server',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error);
    }    
}

export {sql};

//const pool = getConnection();

//export default pool;

//getConnection();