const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    nickname: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        minlength: 3
    },
    height: {
        type: Number,
        requied: false
    },
    picture: {
        type: String
    },
    color: {
        type: String,
        required: false,
    }
});

module.exports = Contestant = mongoose.model('contestant', contestantSchema);