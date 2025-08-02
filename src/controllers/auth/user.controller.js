const { errorResponse, successResponse } = require("../../utils/responseFormat");
const UserServices = require("../../services/auth/auth.service");
const { StatusCodes } = require("http-status-codes");
const { MSG } = require("../../utils/messages");
const userServices = new UserServices();

exports.getProfile = async (req, res) => {
    try {
        let user = await userServices.getSingleUser({_id: req.user.id})
        return res.json(successResponse(StatusCodes.OK, false, MSG.SUCCESS, user));
    } catch (error) {
        console.log("Server Error: ", error);
            return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}