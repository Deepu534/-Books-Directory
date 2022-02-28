const mongoose = require('mongoose')
const bookschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('book', bookschema)