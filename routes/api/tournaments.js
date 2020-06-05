const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Tournament = require('../../models/Tournament');
const Contestant = require('../../models/Contestant');
const User = require('../../models/User');
const Match = require('../../models/Match');

// @route   POST api/tournaments
// @desc    Create a tournament
// @access  Public 
router.post('/', [ auth, [
            check('name', 'Name is required').not().isEmpty()
        ] 
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');
            
            const newTournament = new Tournament({
                name: req.body.name,
                location: req.body.location,
                user: req.user.id,
                participants: []
            });

            const tournament = await newTournament.save();
            res.json(tournament);

        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

// @route   GET api/tournaments
// @desc    Get all tournaments
// @access  Public 
router.get('/', async (req, res) => {
    console.log("all tourneys listed");
    try {
        const tournaments = await Tournament.find().sort({ date: -1});
        res.json(tournaments);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/tournaments/:id
// @desc     Get tournament by ID
// @access   Public
router.get('/:id', auth, async (req, res) => {
    console.log(req.params.id);
    try{
        const tournament = await Tournament.findById(req.params.id);

        if (!tournament) {
            return res.status(404).json({ msg: 'Tournament not found' });
        }

        res.json(tournament);
        
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Tournament not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/tournaments/:id
// @desc     Delete a tournament
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const tournament = await Tournament.findById(req.params.id);

        if (!tournament) {
            return res.status(404).json({ msg: 'Tournament not found' });
        }
  
        // Check user
        if (tournament.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
  
        await tournament.remove();
  
        res.json({ msg: 'Tournament removed' });
    } catch (err) {
        console.error(err.message);
        
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Tournament not found' });
        }

        res.status(500).send('Server Error');
    }
});

// @route    Add api/tournaments/:id/contestants
// @desc     Add a contestant to the tournament
// @access   Public
router.post('/:id/contestants', async (req, res) => {
    try {
        console.log("router received post");
        const tournament = await Tournament.findById(req.params.id);



        if (!tournament) {
            return res.status(404).json({ msg: 'Tournament not found' });
        }

        const newContestant = new Contestant({
            name: req.body.parName,
            nickname: req.body.nickname,
            height: req.body.height,
            picture: req.body.picture,
            color: req.body.color
        });

        const contestant = await newContestant.save();

        console.log(contestant._id);
  
        var newParList = tournament.participants;
        newParList.push({name: contestant.name, id: contestant._id});
        console.log(newParList);
  
        let updateTourn = await Tournament.findOneAndUpdate(
            { _id: req.params.id},
            { $set: { participants: newParList }},
            { returnOriginal: false }
        );
        
        console.log(updateTourn);

        res.json(contestant);
    } catch (err) {
        console.error(err.message);
        
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Tournament not found' });
        }

        res.status(500).send('Server Error');
    }
});

// @route    Add api/tournaments/:id/matches
// @desc     Build the matches for the tournament
// @access   Public
router.post('/:id/matches', async (req, res) => {
    try {
        console.log("router received match build request");
        const tournament = await Tournament.findById(req.params.id);

        if (!tournament) {
            return res.status(404).json({ msg: 'Tournament not found' });
        }

        //fill in blank spots and shuffle

        var newMatchList = [];
        var i = 0;
        while(i < tournament.participants.length){
            var newMatch = new Match({
                topContestant: tournament.participants[i],
                bottomContestant: tournament.participants[i+1],
                winner: { name: "TBD" }
            });

            const match = await newMatch.save();
            newMatchList.push({ topContestant: match.topContestant, bottomContestant: match.bottomContestant, id: match._id});
            i = i + 2;
        }

        console.log(newMatchList);
  
        let updateTourn = await Tournament.findOneAndUpdate(
            { _id: req.params.id},
            { $set: { matches: newMatchList }},
            { returnOriginal: false }
        );
        
        console.log(updateTourn);

        res.json(updateTourn);
    } catch (err) {
        console.error(err.message);
        
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Tournament not found' });
        }

        res.status(500).send('Server Error');
    }
});

module.exports = router;