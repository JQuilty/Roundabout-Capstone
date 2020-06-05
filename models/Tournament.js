const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: { 
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String, 
        required: true 
    },
    participants: {
        type: Array,
        required: true
    },
    matches: {
        type: Array,
        required: true
    }
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);