const userService = require('../services/user-service');

const findUserController = async (req, res) => {
    res.send( await userService.findUserController());
};

const createUserController = async (req, res) => {
    if (!req.body || 
        !req.body.name || 
        !req.body.username ||
        !req.body.email ||
        !req.body.password ||
        !req.body.photo) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await userService.createUserController(req.body));
};

module.exports = {
    findUserController,
    createUserController
};
