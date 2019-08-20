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

exports.BookModel = mongoose('Book', this.BookSchema);