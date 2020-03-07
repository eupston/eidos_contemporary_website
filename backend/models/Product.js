const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
        trim: true,
        maxlength: [60, 'Name cannot be longer than 60 characters']
    },
    price: {
        type: Number,
        required: true,
    },
    quantity : {
        type: Number,
        required: false,
    },
    imageUrl: {
        type: String,
        required: true
    },
    materials: {
      type: String,
        required: false,
    },
    description : {
        type: String,
        required: true,
    },
    display_on_site :{
      type: Boolean,
      required: true
    },
    customizable: {
        type: Boolean,
        required: true
    },
    notes: {
      type: String,
        required: false
    },
    views: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Product', ProductSchema);