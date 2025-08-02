const { StatusCodes } = require('http-status-codes');
const CategoryService = require('../../services/category/category.service');
const { MSG } = require('../../utils/messages');
const { successResponse, errorResponse } = require('../../utils/responseFormat');

module.exports.createCategorys = async (req, res) => {
    try {
        let newCategory = await CategoryService.addCategory(req.body);
        return res.json(successResponse(StatusCodes.CREATED, false, MSG.CATAGORY_ADDED, newCategory));
    } catch (error) {
        console.log(error.message);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST,true,error.message))
    }
};  


module.exports.getCategorys = async(req,res)=>{
    try {
        let newCategory = await CategoryService.getCategory();
        return res.json(successResponse(StatusCodes.OK, false, MSG.CATAGORY_ADDED, newCategory));
    } catch (error) {
        console.log(error.message);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST,true,error.message))
    }
}