const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Manager', 'Librarian', 'Member'],
        default: 'Member'
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        country: String,
        pincode: Number,
        required: true
    },
    membership_date: {
        type: String,
        required: true
    },
    created_at:{
        type: String,
        required: true
    }, 
    updated_at:{
        type: String,
        required: true
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }, 
    updated_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false,
        required: true
    }
});


const User = mongoose.model('users', userSchema);

module.exports = User;