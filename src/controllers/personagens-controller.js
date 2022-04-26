const mongoose = require('mongoose');
const personagensService = require('../services/personagens-services');

const findPersonagensController = async (req, res) => {
    res.send( await personagemService.findPersonagensController());
};

const findPersonagensByIdController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'ID inválido'});
    }
}
