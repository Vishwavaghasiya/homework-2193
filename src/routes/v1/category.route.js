const express = require('express');
const categoryController = require('../../controllers').categoryController;

const router = express.Router();

/** create category */
router.get(
    "/create-category",
    categoryController.createCategory
);

module.exports = {
    router
}