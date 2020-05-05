const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
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
        type: Object,
        required: false
    },
    color: {
        type: String,
        required: false,
        minlength: 7
    }
});

const Contestant = mongoose.model('Contestant', contestantSchema);
module.exports = Contestant;