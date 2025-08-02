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
            return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.BOOK_EXIST));

        req.body.created_at = moment(Date.now()).format("DD-MM-YYYY");
        req.body.updated_at = moment(Date.now()).format("DD-MM-YYYY");

        let newBook = await bookService.addBook(req.body);

        return res.json(successResponse(StatusCodes.CREATED, false, MSG.BOOK_ADDED, newBook));
    } catch (error) {
        console.log("Server Error : ", error);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Fetch All Books
exports.fetchBooks = async (req, res) => {
    try {
        const allBooks = await bookService.getFetchBooks();

        if (allBooks && allBooks.length > 0)
            return res.json(successResponse(StatusCodes.OK, false, MSG.BOOK_FETCHED, allBooks));
        else
            return res.json(successResponse(StatusCodes.NOT_FOUND, false, MSG.BOOK_NOT_FOUND, []));


    } catch (error) {
        console.error("Server Error:", error);
        return res.json(errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
    }
};


// Fetch Single Book
exports.fetchSingleBook = async (req, res) => {
    try {
        const singleBook = await bookService.getSingleBook({ isbn: req.params.isbn, isDelete: false });

        if (singleBook)
            return res.json(successResponse(StatusCodes.OK, false, MSG.BOOK_SINGLE_FETCHED, singleBook));
        else
            return res.json(successResponse(StatusCodes.NOT_FOUND, false, MSG.BOOK_NOT_FOUND, {}));

    } catch (error) {
        console.log("Server Error : ", error);
        return res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
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
        const deleteBook = await bookService.deleteBook(req.params.id);

        if (deleteBook)
            return res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, false, MSG.BOOK_DELETED, deleteBook));
        else
            return res.status(StatusCodes.NOT_FOUND).json(successResponse(StatusCodes.NOT_FOUND, false, MSG.BOOK_NOT_FOUND, deleteBook));
    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}