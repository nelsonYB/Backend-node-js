const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido =  async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
       throw new Error(`El rol ${ rol } no está registrado en la BD`)
    }
}


const esEmailValido = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo }); //Busca un objeto que tenga el correo igual al correo que recibo como argumento  
            if ( existeEmail ){
                throw new Error(`El correo: ${ correo } ya está registrado`);
            }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ){
        throw new Error(`El id no existe ${ id }`);
    }
}


module.exports = {
    esRoleValido,
    esEmailValido,
    existeUsuarioPorId
}