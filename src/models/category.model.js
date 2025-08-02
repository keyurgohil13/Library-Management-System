const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    created_at: {
        type: String
    },
    updated_at: {
        type: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})

const Category = mongoose.model('category',categorySchema)