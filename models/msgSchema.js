

const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
    originalText: {
        type: String , 
        require: true
    },
    encryptedText: {
        type: String , 
        require: true
    },
});


const Text = mongoose.model('Text', textSchema);

module.exports = Text;