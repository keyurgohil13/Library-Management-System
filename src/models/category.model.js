const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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

const Category = mongoose.model('category',categorySchema);

module.exports = Category;