const express = require('express');
const routes = express.Router();

routes.use('/category',require('./category/category.route'));

routes.use('/book', require("./book/book.route"));


routes.use("/auth", require('./auth/auth.route'));

module.exports = routes;