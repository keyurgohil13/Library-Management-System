const moment = require("moment/moment");
const UserServices = require("../../services/auth/auth.service");
const { errorResponse, successPageResponse, successResponse } = require("../../utils/responseFormat");
const userServices = new UserServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require("http-status-codes");
const { MSG } = require("../../utils/messages");

exports.registerUser = async (req, res) => {

  try {
    const existUser = await userServices.getSingleUser({ email: req.body.email, isDelete: false });
    if(existUser){
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.USER_EXIST));
    }

    let hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.created_at = moment(Date.now()).format("DD-MM-YYYY");
    req.body.updated_at = moment(Date.now()).format("DD-MM-YYYY");
    req.body.membership_date = moment(Date.now()).format("DD-MM-YYYY");
    let newUser = await userServices.registerUser({ ...req.body, password: hashPassword });

    return res.json(successResponse(StatusCodes.CREATED, false, MSG.USER_CREATED, newUser))

  } catch (error) {
    console.log("Server Error: ", error);
    return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
  }
};


exports.loginUser = async(req, res) => {
    try { 
    const user = await userServices.getSingleUser({ email: req.body.email, isDelete: false });
    if(!user){
        return res.json(errorResponse(StatusCodes.NOT_FOUND, true, MSG.USER_NOT_FOUND));
    }
    let matchPassword = await bcrypt.compare(req.body.password, user.password)
    if(!matchPassword){
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.ERROR_LOGIN))
    }
    let payload = {
        userID: user._id
    }
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return res.json(successResponse(StatusCodes.OK, false, MSG.SUCCESS_LOGIN, token))

  } catch (error) {
    console.log("Server Error: ", error);
    return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
  }
}