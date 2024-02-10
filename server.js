const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Define Mongoose models
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  email: String,
  // Add other fields as needed
}));

const Thought = mongoose.model('Thought', new mongoose.Schema({
  text: String,
  userId: mongoose.Schema.Types.ObjectId,
  // Add other fields as needed
}));

const Reaction = mongoose.model('Reaction', new mongoose.Schema({
  thoughtId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  reactionType: String,
  // Add other fields as needed
}));

// Define routes
app.use(express.json());

// Users routes
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

// Thoughts routes
app.get('/api/thoughts', async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
});

app.post('/api/thoughts', async (req, res) => {
  const newThought = new Thought(req.body);
  await newThought.save();
  res.status(201).json(newThought);
});

// Reactions routes
app.post('/api/reactions', async (req, res) => {
  const newReaction = new Reaction(req.body);
  await newReaction.save();
  res.status(201).json(newReaction);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
