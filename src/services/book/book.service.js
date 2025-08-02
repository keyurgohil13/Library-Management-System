const Book = require("../../models/book.model");
const { errorResponse } = require("../../utils/responseFormat");
const { StatusCodes } = require("http-status-codes");
const { MSG } = require("../../utils/messages");

module.exports = class BookServices {
    async addBook(body) {
        try {
            return await Book.create(body);
        } catch (error) {
            console.log("Add Book Error : ", error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR)
        }
    }

    async getSingleBook(body) {
        try {
            return await Book.findOne(body);
        } catch (error) {
            console.log("Add Book Error : ", error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR)
        }
    }
}
