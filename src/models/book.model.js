const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
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
    },
    isDelete: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("books", bookSchema);