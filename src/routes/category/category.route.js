const { Router } = require("express");
const { getCategorys, createCategorys } = require("../../controllers/category/category.controller");
const router = Router();

router.get('/',getCategorys);
router.post('/',createCategorys);


module.exports = categoryRouter; 