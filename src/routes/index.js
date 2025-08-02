const express = require('express');
const { authMiddleware, authRoleMiddleware } = require('../middleware/auth.middleware');
const routes = express.Router();

routes.use("/auth", require('./auth/auth.route'));

// routes.use(authMiddleware);

routes.use("/user", require('./auth/user.route'));
routes.use('/category', require('./category/category.route'));
routes.use('/book', require("./book/book.route"));

module.exports = routes;