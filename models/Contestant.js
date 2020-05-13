const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        type: int,
        requied: false
    },
    picture: {
        type: object,
        required: false
    },
    color: {
        type: string,
        required: true,
        minlength: 7
    }


})

const Contestant = mongoose.model('Contestant', userSchema);
module.exports = Contestant;