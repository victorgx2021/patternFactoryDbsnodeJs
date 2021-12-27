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

async function getConnection() {
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query('Select 1');    
    console.log(result);
}

getConnection();