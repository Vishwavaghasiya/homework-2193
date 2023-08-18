const express = require('express');
const {categoryValidation} = require('../../validation');
const validate = require('../../middlewares/validate')
const categoryController = require('../../controllers').categoryController;

const router = express.Router();

/** create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

module.exports = router