const Thought = require('../models/Thought');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  addReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions.push(req.body);
      await thought.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  removeReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions = thought.reactions.filter(reaction => reaction.reactionId.toString() !== req.params.reactionId);
      await thought.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = thoughtController;
