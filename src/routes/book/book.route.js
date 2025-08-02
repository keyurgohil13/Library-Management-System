const express = require('express');

const route = express.Router();


const { addBook, fetchBooks, fetchSingleBook, updateBook, deleteBook } = require("../../controllers/book/book.controller");

// Add New Book
route.post("/", addBook);



// View All Books
route.get("/", fetchBooks);

// View Single Book
route.get("/:id", fetchSingleBook);

// Update Book
route.patch("/", updateBook);

// Delete Book
route.delete("/", deleteBook)

module.exports = route;