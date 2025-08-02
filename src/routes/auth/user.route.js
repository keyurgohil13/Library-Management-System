const express = require('express');
const { getProfile } = require('../../controllers/auth/user.controller');

const userRoutes = express.Router();

userRoutes.get("/", getProfile);
// userRoutes.post("/login", loginUser);

module.exports = userRoutes;