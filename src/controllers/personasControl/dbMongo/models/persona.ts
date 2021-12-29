import { Schema,model,Document } from "mongoose";

export interface IPersona extends Document{
    id: Number;
    nombre: String;
}

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

personaSchema.set('toJSON',{
    transform: function (doc, ret, options) {
        //ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export default model<IPersona>('Persona',personaSchema);