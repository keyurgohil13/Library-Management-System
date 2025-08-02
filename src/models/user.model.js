const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        enum: ['Admin', 'Manager', 'Librarian', 'Member'],
        default: 'Member'
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        country: String,
        pincode: Number,
        require: true
    },
    membership_date: {
        type: String,
        require: true
    },
    created_at:{
        type: String,
        require: true
    }, 
    updated_at:{
        type: String,
        require: true
    },
    is_active: {
        type: Boolean,
        default: true,
        require: true
    },
    isDelete: {
        type: Boolean,
        default: false,
        require: true
    }
});


const User = mongoose.model('users', userSchema);

module.exports = User;