const express = require('express');
const { getProfile, getAllUsers } = require('../../controllers/auth/user.controller');
const { authRoleMiddleware } = require('../../middleware/auth.middleware');

const userRoutes = express.Router();

userRoutes.get('/',authRoleMiddleware(['Admin', 'Manager', 'Librarian']), getAllUsers);
userRoutes.get("/profile", getProfile);




module.exports = userRoutes;