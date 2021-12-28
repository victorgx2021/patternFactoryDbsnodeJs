import { Schema,model } from "mongoose";

const personaSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        required: true
    }
})

export default model('Persona', personaSchema);