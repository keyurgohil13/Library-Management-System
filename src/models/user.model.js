const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Librarian', 'Member'],
        default: 'Member'
    },
    phone: {
        type: String
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        country: String,
        pincode: Number,
    },
    membership_date: {
        type: String
    },
    created_at:{
        type: String
    }, 
    updated_at:{
        type: String
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
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.model('users', userSchema);

module.exports = User;