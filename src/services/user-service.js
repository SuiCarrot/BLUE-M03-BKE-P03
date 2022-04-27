const User = require("../models/User")

const findUsersService = async () => {
    return await User.find();
};

const createUserService = async (newUser) => {
    return await User.create(newUser);
};


module.exports = {
    findUsersService,
    createUserService,
};
