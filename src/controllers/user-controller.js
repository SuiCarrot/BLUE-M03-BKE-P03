const mongoose = require('mongoose');
const userService = require('../services/user-service');

const findUserController = async (req, res) => {
    res.send( await userService.findUserController());
};

const createUserController = async (req, res) => {
    if (!req.body || 
        !req.body.personagemName || 
        !req.body.faction || 
        !req.body.race || 
        !req.body.img) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await userService.createUserController(req.body));
};

module.exports = {
    findUserController,
    createUserController
};
