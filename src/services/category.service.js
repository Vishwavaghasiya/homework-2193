const { Category } = require('../models');

const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};

module.exports = {
    createCategory
};