const { StatusCodes } = require("http-status-codes");
const BookServices = require("../../services/book/book.service");
const { errorResponse, successResponse } = require("../../utils/responseFormat");
const { MSG } = require("../../utils/messages");

const moment = require("moment")
const bookService = new BookServices();

// Add New Book
export const addBook = async (req, res) => {
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
export const fetchBooks = async (req, res) => {
    try {
        const allBooks = await bookService.getFetchBooks();

        res.json(successResponse(StatusCodes.CREATED, false, MSG.BOOK_FETCHED, allBooks))
    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Fetch Single Book
export const fetchSingleBook = async (req, res) => {
    try {

    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Update Book
export const updateBook = async (req, res) => {
    try {

    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}

// Delete Book
export const deleteBook = async (req, res) => {
    try {

    } catch (error) {
        console.log("Server Error : ", error);
        res.json(errorResponse(StatusCodes.BAD_REQUEST, true, MSG.SERVER_ERROR));
    }
}