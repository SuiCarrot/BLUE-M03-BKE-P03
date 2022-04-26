const express = require('express')
const router = express.Router()


const userController = require('../controllers/user-controller.js');
const authController = require('../controllers/auth-controller');
const personagensController = require('../controllers/controller.js');


//USER
router.get('/users', userController.findUserController)
router.post('/users/create', userController.createUserController)

//AUTH
router.post('auth/login', authController.findAuthLoginController)

//PERSONAGENS
router.get('/characters', personagensController.findPersonagensController);

router.post('/characters/create', personagensController.createPersonagemController);

router.get('/characters/find/:id', personagensController.findPersonagemByIdController);

router.put('/characters/update/:id', personagensController.updatePersonagemController);

router.delete('characters/delete/:id', personagensController.deletePersonagemController);

router.get('/characters/search', personagensController.findPersonagemByNameController);

module.exports = router
