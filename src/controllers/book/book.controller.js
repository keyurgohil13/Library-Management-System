const { StatusCodes } = require("http-status-codes");
const BookServices = require("../../services/book/book.service");
const { errorResponse, successResponse } = require("../../utils/responseFormat");
const { MSG } = require("../../utils/messages");

const moment = require("moment")
const bookService = new BookServices();

// Add New Book
exports.addBook = async (req, res) => {
    try {

        const existBook = await bookService.getSingleBook({ isbn: req.body.isbn, isDelete: false });

        if (existBook)
            res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.BOOK_EXIST));

        req.body.created_at = moment(Date.now()).format("DD-MM-YYYY");
        req.body.updated_at = moment(Date.now()).format("DD-MM-YYYY");

        let newBook = await bookService.addBook(req.body);

        res.json(successResponse(StatusCodes.CREATED, false, MSG.BOOK_ADDED, newBook));
    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Fetch All Books
exports.fetchBooks = async (req, res) => {
    try {
        const allBooks = await bookService.getFetchBooks();

        res.json(successResponse(StatusCodes.CREATED, false, MSG.BOOK_FETCHED, allBooks))
    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Fetch Single Book
exports.fetchSingleBook = async (req, res) => {
    try {

    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Update Book
exports.updateBook = async (req, res) => {
    try {

    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Delete Book
exports.deleteBook = async (req, res) => {
    try {

    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}