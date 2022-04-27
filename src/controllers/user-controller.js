const userService = require('../services/user-service');

const findUserController = async (req, res) => {
    res.send( await userService.findUserController());
};

const createUserController = async (req, res) => {
    if (!req.body || 
        !req.body.user || 
        !req.body.name ||
        !req.body.imageUrl) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await userService.createUserController(req.body));
};

module.exports = {
    findUserController,
    createUserController
};
