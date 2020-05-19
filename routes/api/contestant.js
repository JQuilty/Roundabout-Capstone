const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Contestant = require('../../models/Contestant');

// @route   POST api/contestant
// @desc    Create or update a contestant
// @access  Private
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
            
            const newContestant = new Contestant({
                name: req.body.name,
                nickname: req.body.nickname,
                height: req.body.height,
                picture: req.body.picture,
                color: req.body.color
            });

            const contestant = await newContestant.save();
            res.json(contestant);

        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

// @route   GET api/contestant
// @desc    Get all contestant
// @access  Public 
router.get('/', async (req, res) => {
    try {
        const contestant = await Contestant.find().sort({ date: -1});
        res.json(contestant);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/contestant/:id
// @desc     Get contestant by ID
// @access   Public
router.get('/:id', auth, async (req, res) => {
    try {
        const contestant = await Contestant.findById(req.params.id);

        if (!contestant) {
            return res.status(404).json({ msg: 'Contestant not found' });
        }

        res.json(contestant);
        
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Contestant not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;