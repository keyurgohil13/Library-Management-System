const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../../utils/responseFormat");
const { MSG } = require("../../utils/messages");
const User = require("../../models/user.model");

module.exports = class UserServices {
    // New User Register
    async registerUser(body) {
        try {
            return await User.create(body);
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR);
        }
    };

    // Single User finding
    async getSingleUser(body) {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR);
        }
    };
    
    // User Update
    async updateUser(id, body) {
        try {
            return await User.findByIdAndUpdate(id, body, {new: true});
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR);
        }
    };

     // Get All Users
    async getAllUsers(query) {
        try {
            let condition = { ...query, isDelete: false };
             return await User.find({...condition});
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR);
        }
    }
}