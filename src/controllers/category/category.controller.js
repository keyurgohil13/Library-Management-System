const { StatusCodes } = require('http-status-codes');
const CategoryService = require('../../services/category/category.service');
const { MSG } = require('../../utils/messages');
const { successResponse, errorResponse } = require('../../utils/responseFormat');
const moment = require('moment');
const categoryService = new CategoryService();
exports.createCategorys = async (req, res) => {
    try {
         req.body.created_at = moment(Date.now()).format("DD-MM-YYYY");
        req.body.updated_at = moment(Date.now()).format("DD-MM-YYYY");
        let newCategory = await categoryService.addCategory(req.body);
        
        return res.json(successResponse(StatusCodes.CREATED, false, MSG.CATAGORY_ADDED, newCategory));
    } catch (error) {
        console.log("error",error.message);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST,true,error.message))
    }
};  


exports.getCategorys = async(req,res)=>{
    try {
        let newCategory = await categoryService.getCategory();
        return res.json(successResponse(StatusCodes.OK, false, MSG.CATAGORY_ADDED, newCategory));
    } catch (error) {
        console.log(error.message);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST,true,error.message))
    }
}