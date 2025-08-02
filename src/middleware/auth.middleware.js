const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const UserServices = require("../services/auth/auth.service");
const { errorResponse } = require('../utils/responseFormat');
const { StatusCodes } = require('http-status-codes');
const { MSG } = require('../utils/messages');
const userServices = new UserServices();

exports.authMiddleware = async (req, res, next) => {
    // Get token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.json(errorResponse(StatusCodes.UNAUTHORIZED, true, MSG.TOKEN_MISSING));
    }

    try {
        const secret = process.env.JWT_SECRET; // Use env variable in production
        const {userID} = jwt.verify(token, secret);
        if(userID){
            req.user = await userServices.getSingleUser({_id: userID}) 
            next();
        }else{
            return res.json(errorResponse(StatusCodes.UNAUTHORIZED, true, MSG.TOKEN_INVALID));
        }
    } catch (err) {
        return res.json(errorResponse(StatusCodes.UNAUTHORIZED, true, MSG.TOKEN_INVALID));
    }
};

exports.authRoleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.json(errorResponse(StatusCodes.UNAUTHORIZED, true, MSG.UNAUTHORIZED));
        }
        next();
    };
};


