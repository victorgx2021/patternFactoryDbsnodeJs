import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1:27017/personas';

(async() => {

    try{
        const pool = await mongoose.connect(URI);
    console.log('DB connected to', pool.connection.name);
    }catch(error){
        console.log(error);
    }
})()

/*export async function connect() {
    
    try{
        const pool = await mongoose.connect(URI);
        return pool;
    }
    catch(err){
        console.log(err);
    }
}

export {mongoose};*/