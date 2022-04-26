const mongoose = require('mongoose');
const personagensService = require('../services/personagens-services');

const findPersonagensController = async (req, res) => {
    res.send( await personagensService.findPersonagensController());
};

const findPersonagensByIdController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'ID inválido' });
    };

    if (!( await personagensService.findPersonagensByIdController(req.params.id))) {
        return res.status(404).sen({ message: 'Personagem não localizado!' });
    };

    res.send( await personagensService.findPersonagensByIdController(req.params.id));
};

const createPersonagemController = async (req, res) => {
    if (!req.body || 
        !req.body.personagemName || 
        !req.body.faction || 
        !req.body.race || 
        !req.body.img) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await personagensService.createPersonagemController(req.body));
};

const updatePersonagemController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        returnres.satatus(400).send({ message: 'ID inválido!' });
    }

    if (!( await personagensService.updatePersonagemController(req.params.id))) {
        return res.status(404).send({ message: 'Personagem não localizado!' });
    };
}




