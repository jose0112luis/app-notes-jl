// Esquema de las notas de la base de datos
// Schema: permite definir un esquema o lo q voy a guardar en la BDD (es como una tabla donde defino parámetros y tipo de datos)
// model: a partir de un esquema me permite crear una clase q me permita crear métodos y propiedades
const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title:  {               // shorthand for type: String
        type: String,     
        required: true
    }, 
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true // agrega por default 2 propiedades (createdAt y updatedAt)
});

module.exports = model('Note', noteSchema);