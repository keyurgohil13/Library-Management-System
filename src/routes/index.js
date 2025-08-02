const express = require('express');
const routes = express.Router();

routes.use('/category',require('./category/category.route'));

module.exports = routes;