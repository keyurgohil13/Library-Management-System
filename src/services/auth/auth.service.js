const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../../utils/responseFormat");
const User = require("../../models/user.model");

module.exports = class UserServices {
    // New User Register
    async registerUser(body) {
        try {
            return await User.create(body);
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, error.message);
        }
    };
    
    // Single User finding
    async getSingleUser(body) {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, error.message);
        }
    };
}