const router = require('express').Router();
let Contestant = require('../models/contestant.model');

router.route('/').get((req, res) => {
    Contestant.find()
    .then(Contestant => res.json(contestant))
    .catch(err => res.status(400).json('Error Message ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const nickname = req.body.nickname;
    const height = req.body.height;
    //const newContestant = new Contestant({name});
    //newUser.save()
    const newContestant = new Contestant({
        name,
        nickname,
        height
   });

   newContestant.save()
   .then(() => res.json('Contestant added successfuly'))
   .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router; 