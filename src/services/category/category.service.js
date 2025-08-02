const { StatusCodes } = require("http-status-codes");
const Category = require("../../models/category.model");
const { errorResponse } = require("../../utils/responseFormat");

module.exports = class CategoryService{
    async addCategory(body){
       try {
        console.log("body", body);
        
            return await Category.create(body);
        } catch (error) {
            console.log(error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, error.message);
        }
    }

    async getCategory(){
        try {
            return await Category.find({isDelete:false});
        } catch (error) {
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, error.message);
        }
    }

}