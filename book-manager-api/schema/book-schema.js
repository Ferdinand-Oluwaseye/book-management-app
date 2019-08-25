var mongoose = require('mongoose');

exports.BookSchema = new mongoose.Schema({
    book_name: {
        type: String
    },
    author_name: {
        type: String
    },
    serial_number: {
        type: Number
    }
});

module.exports = mongoose.model('Book', this.BookSchema);