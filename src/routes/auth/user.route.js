const express = require('express');
const { getProfile, changePassword, updateProfile } = require('../../controllers/auth/user.controller');

const userRoutes = express.Router();

userRoutes.get("/profile", getProfile);
userRoutes.put("/change-password", changePassword);
userRoutes.put("/profile", updateProfile);

module.exports = userRoutes;