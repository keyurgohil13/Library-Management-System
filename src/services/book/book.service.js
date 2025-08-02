const Book = require("../../models/book.model");
const { errorResponse } = require("../../utils/responseFormat");
const { StatusCodes } = require("http-status-codes");
const { MSG } = require("../../utils/messages");

module.exports = class BookServices {
    // New Book Add 
    async addBook(body) {
        try {
            return await Book.create(body);
        } catch (error) {
            console.log("Book Error : ", error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR)
        }
    }

    // Fetch All Books
    async getFetchBooks() {
        try {
            return await Book.find({ isDelete: false }).populate("category", "name description");
        } catch (error) {
            console.log("Book Error : ", error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR)
        }
    }

    // Fetch Single Book
    async getSingleBook(body) {
        try {
            return await Book.findOne(body).populate("category", "name description");
        } catch (error) {
            console.log("Book Error : ", error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR)
        }
    }

    // Delete Book 
    async deleteBook(body) {
        try {
            return await Book.findByIdAndUpdate(body, { isDelete: true });
        } catch (error) {
            console.log("Book Error : ", error);
            return errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR)
        }
    }
}
