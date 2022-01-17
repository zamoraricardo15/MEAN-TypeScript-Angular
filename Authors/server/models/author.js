const mongoose = require('mongoose');




var AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required."],
        minlength: [3, "Author's name of at least 3 characters long."]
    }

    
}, {timestamps: true});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;