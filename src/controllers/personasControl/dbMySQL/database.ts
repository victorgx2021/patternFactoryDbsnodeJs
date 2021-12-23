import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

//npm i promise-mysql@3.3.1
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});

export default pool;