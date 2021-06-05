
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, esEmailValido, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPost, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom( existeUsuarioPorId ),
   check('rol').custom( esRoleValido ),
   validarCampos
], usuariosPut);

router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('password', 'El password debe ser más de 6 letras').isLength({ min:6 }),
   check('correo').custom( esEmailValido ),
   // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
   check('rol').custom( esRoleValido ),
   validarCampos
], usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/:id', [
   check('id', 'No es un ID válido').isMongoId(),
   check('id').custom( existeUsuarioPorId ),
   validarCampos 
],usuariosDelete);


module.exports = router;
