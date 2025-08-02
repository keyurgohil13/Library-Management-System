const moment = require("moment/moment");
const User = require("../../models/user.model");
const UserServices = require("../../services/auth/auth.service");
const { errorResponse, successPageResponse, successResponse } = require("../../utils/responseFormat");
const userServices = new UserServices();
const bcrypt = require('bcrypt');
const { StatusCodes } = require("http-status-codes");
const { MSG } = require("../../utils/messages");

exports.registerUser = async (req, res) => {
  try {

    const existUser = await userServices.getSingleUser({ email: req.body.email, isDelete: false });
<<<<<<< HEAD
    if (existUser) {
      return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, 'User is Already Exist'));
=======
    if(existUser){
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.USER_EXIST));
>>>>>>> 8200036f70bc2d35a13223ed3d5a2a2b38e4bdb3
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
