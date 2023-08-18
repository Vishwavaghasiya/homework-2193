const { categoryService } = require('../services');

/** creatCategory */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something wents wrong , please try again later !!");
        }

        res.status(200).json(
            {
                success: true,
                message: reqBody,
                data: { reqBody },
            }
        );
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createCategory
};