const { Router } = require("express");
const categoryController = require('../../controllers/category/category.controller');
const categoryRouter = Router();

categoryRouter.get('/',categoryController.getCategorys);
categoryRouter.post('/',categoryController.createCategorys);


module.exports = categoryRouter; 