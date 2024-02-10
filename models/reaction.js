const express = require('express');
const router = express.Router();
const Reaction = require('../models/Reaction');
const Thought = require('../models/Thought');

// Add a reaction to a thought
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    const newReaction = await Reaction.create(req.body);
    thought.reactions.push(newReaction);
    await thought.save();
    res.status(201).json(newReaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      // Filter out the reaction from the thought's reactions array
      thought.reactions = thought.reactions.filter(reaction => reaction._id.toString() !== req.params.reactionId);
      await thought.save();
      res.json({ message: 'Reaction removed successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;
