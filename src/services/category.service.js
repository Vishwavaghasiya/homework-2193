const { Category } = require('../models');

const creatCategory = async (reqBody) => {
    return Category.create(reqBody);
};

module.exports = {
    creatCategory
};