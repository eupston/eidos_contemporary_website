const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
        trim: true,
        maxlength: [30, 'Name cannot be longer than 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        maxlength: [40, 'Email cannot be longer than 40 characters'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be longer than 20 characters']
    },
    status : {
        type: String,
        enum: [
            'new',
            'repeat'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model('User', UserSchema);