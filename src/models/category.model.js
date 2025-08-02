const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
<<<<<<< HEAD
        required: true
    },
    description: {
        type: String,
        required: true
=======
    },
    description: {
        type: String,
>>>>>>> 2058f257787d24d22b88427cb73ab0f1f7702b82
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