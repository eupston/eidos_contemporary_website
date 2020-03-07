const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
        trim: true,
        maxlength: [30, 'Name cannot be longer than 30 characters']
    },
    urlName: String,
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        maxlength: [40, 'Email cannot be longer than 40 characters'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    ring_size: {
        type: Number
    },
    password:{
        type: String,
        required: [true, 'Password must be longer than 8 characters'],
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

UserSchema.pre('save', function(next) {
    this.urlName = this.name.toString().replace(/ /g, '-').toLowerCase();
    next();
})


module.exports = mongoose.model('User', UserSchema);