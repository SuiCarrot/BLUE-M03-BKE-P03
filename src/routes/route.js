const express = require('express')
const router = express.Router()


const userController = require('../controllers/user-controller.js');
const authController = require('../controllers/auth-controller');
const personagensController = require('../controllers/controller.js');


//USER
router.get('/users', userService.findUserController);
router.post('/users/create', userService.createUserController);

//AUTH
router.post('auth/login', authController.findAuthLoginController)

//PERSONAGENS
router.get('/characters', personagensService.findPersonagensController);

router.post('/characters/create', personagensService.createPersonagemController);

router.get('/characters/find/:id', personagensService.findPersonagemByIdController);

router.put('/characters/update/:id', personagensService.updatePersonagemController);

router.delete('characters/delete/:id', personagensService.deletePersonagemController);

router.get('/characters/search', personagensService.findPersonagemByNameController);

module.exports = router
