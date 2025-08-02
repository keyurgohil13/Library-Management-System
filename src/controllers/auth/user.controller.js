const moment = require("moment/moment");
const { errorResponse, successResponse } = require("../../utils/responseFormat");
const UserServices = require("../../services/auth/auth.service");
const { StatusCodes } = require("http-status-codes");
const { MSG } = require("../../utils/messages");
const userServices = new UserServices();
const bcrypt = require('bcrypt');

exports.getProfile = async (req, res) => {
    try {
        let user = await userServices.getSingleUser({_id: req.user.id})
        return res.json(successResponse(StatusCodes.OK, false, MSG.SUCCESS, user));
    } catch (error) {
        console.log("Server Error: ", error);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
};

exports.changePassword = async (req, res) => {
    try {
        let matchOldPassword = await bcrypt.compare(req.body.oldPassword, req.user.password);
        if(!matchOldPassword){
            return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.PASSWORD_NOT_MATCH))
        }
        if(req.body.newPassword !== req.body.confirmPassword){
            return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.PASSWORD_NOT_MATCH))
        }
        let hashPassword = await bcrypt.hash(req.body.newPassword, 10);
        let updated_at = moment(Date.now()).format("DD-MM-YYYY");
        await userServices.updateUser(req.user._id, {password: hashPassword, updated_at: updated_at});
        res.json(successResponse(StatusCodes.OK, false, MSG.PASSWORD_CHANGED))
    } catch (error) {
        console.log("Server Error: ", error);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
};

exports.updateProfile = async (req, res) => {
    try {
        req.body.updated_at = moment(Date.now()).format("DD-MM-YYYY");
        await userServices.updateUser(req.user._id, {...req.body, });
        res.json(successResponse(StatusCodes.OK, false, MSG.USER_UPDATED))
    } catch (error) {
        console.log("Server Error: ", error);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
};

exports.getAllUsers = async (req, res) => {
     try {
        let users = await userServices.getAllUsers(req.query)
        return res.json(successResponse(StatusCodes.OK, false, MSG.SUCCESS, users));
    } catch (error) {
        console.log("Server Error: ", error);
            return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}