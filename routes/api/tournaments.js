const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Tournament = require('../../models/Tournament');
const User = require('../../models/User');

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
                user: req.user.id
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
    try {
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
        const tournament = await Tournamnet.findById(req.params.id);

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

module.exports = router;