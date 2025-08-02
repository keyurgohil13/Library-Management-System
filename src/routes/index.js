const express = require('express');
const routes = express.Router();

routes.use('/category',require('./category/category.route'));

routes.use('/book', require("./book/book.route"));



module.exports = routes;