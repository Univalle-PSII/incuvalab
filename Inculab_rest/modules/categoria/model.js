import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
//initJSnombre_categoria
nombre_categoria: {
            type: Schema.Types.String,
            required: true,
            
            uppercase: true,
            
            
            
            trim: true,
        },
        
//endJSnombre_categoria
//initJSdescripcion
descripcion: {
            type: Schema.Types.String,
            
            
            
            
            
            
            trim: true,
        },
        
//endJSdescripcion
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
export default model('Categoria',categoriaSchema);