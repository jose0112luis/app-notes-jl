const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
},
{
    timestamps: true
});

// mongoose me permite creat metodos a partir de la función method
// para cifrar/encriptar la contraseña
userSchema.method.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// para comparar la contraseña con la BDD
userSchema.method.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema);