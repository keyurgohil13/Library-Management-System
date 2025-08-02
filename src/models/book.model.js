const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.ObjectId.type,
        ref: "category"
    },
    publisher: String,
    publication_year: Number,
    total_copies: Number,
    available_copies: Number,
    shelf_location: String,
    description: String,
    created_at: String,
    updated_at: String,
    is_active: {
        type: Boolean,
        default: true,
        require: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
        require: true,
    }
})

module.exports = mongoose.model("books", bookSchema, "Books");