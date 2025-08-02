const express = require('express');
const { registerUser } = require('../../controllers/auth/auth.controller');

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
// authRoutes.post("/auth/login", registerUser);

module.exports = authRoutes;