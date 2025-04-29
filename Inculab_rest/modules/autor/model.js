import { Schema, model } from "mongoose";

const autorSchema = new Schema({
//initJSnombre
nombre: {
            type: Schema.Types.String,
            required: true,
            
            uppercase: true,
            
            
            
            trim: true,
        },
        
//endJSnombre
//initJSfoto
foto: [{
            type: Schema.Types.Mixed,
            
        }],
        
//endJSfoto
//initJSbiografia
biografia: {
            type: Schema.Types.String,
            
            
            
            
            
            
            trim: true,
        },
        
//endJSbiografia
//initJSprofesion
profesion: {
            type: Schema.Types.String,
            
            
            
            
            
            
            trim: true,
        },
        
//endJSprofesion
//fields
    last_user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true, //createdAt updatedAt automatic
    methods: {
        //solo para el documento
    },
    statics: {
        //para todo el modelo
    },
    query: {
        //para odenar o hacer consultas especiales
    }
});
export default model('Autor',autorSchema);