import { Schema, model } from "mongoose";

const casosSchema = new Schema({
//initJStitulo
titulo: {
            type: Schema.Types.String,
            required: true,
            
            
            
            
            
            trim: true,
        },
        
//endJStitulo
//initJSdescripcion
descripcion: {
            type: Schema.Types.String,
            
            
            
            
            
            
            trim: true,
        },
        
//endJSdescripcion
//initJSfotos
fotos: [{
            type: Schema.Types.Mixed,
            
        }],
        
//endJSfotos
//initJSvideos
videos: [{
            type: Schema.Types.Mixed,
            
        }],
        
//endJSvideos


//initJSid_categoria
id_categoria: [{
            type: Schema.Types.ObjectId,
            
            
            
            
            
            ref: "Categoria",
            
            
            
        }],
        
//endJSid_categoria
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
export default model('Casos',casosSchema);