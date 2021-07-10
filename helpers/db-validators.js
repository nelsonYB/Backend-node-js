const { Usuario, Role, Categoria, Producto } = require('../models');

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

// Validaciones de categorias

const existeCategoriaPorId = async(id) => {
    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ){
        throw new Error(`El id no existe ${ id }`);
    }
}


// Validaciones de productos
const existeProductoPorId = async(id) => {
    const existeProducto = await Producto.findById(id);
    if ( !existeProducto ){
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    esRoleValido,
    esEmailValido,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}