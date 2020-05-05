const router = require('express').Router();
let Tournament = require('../models/tournament.model');

router.route('/').get((req, res) => {
    Tournament.find()
    .then(tournament => res.json(tournament))
    .catch(err => res.status(400).json('Error Message ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    
    const newTournament = new Tournament({name});
    newTournament.save()
    .then(() => res.json('Added New Event'))
    .catch(err => res.status(400).json('Error Message: ' + err));
});

module.exports = router; 