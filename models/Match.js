const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    topContestant: {
        type: Object,
        required: true
    },
    bottomContestant: {
        type: Object,
        required: true
    },
    winner: {
        type: Object,
        requied: true
    }
});

module.exports = Match = mongoose.model('match', matchSchema);