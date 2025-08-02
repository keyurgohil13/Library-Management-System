const express = require('express');

const route = express.Router();


const { addBook, fetchBooks, fetchSingleBook, updateBook, deleteBook } = require("../../controllers/book/book.controller");

// Add New Book
route.post("/", addBook);

// View All Books
route.get("/", fetchBooks);

// View Single Book
route.get("/:isbn", fetchSingleBook);

// Update Book
route.patch("/:id", updateBook);

// Delete Book
route.delete("/:id", deleteBook)

module.exports = route;