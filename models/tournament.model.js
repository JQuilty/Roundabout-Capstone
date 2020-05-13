const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: {type: String, required: true }
})

const Tournament = mongoose.model('Tournament', TournamentSchema);
module.exports = Tournament;