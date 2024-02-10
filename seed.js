const mongoose = require('mongoose');
const User = require('./models/user');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');

  // Define sample users
  const sampleUsers = [
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' },
    { username: 'user3', email: 'user3@example.com' },
    // Add more sample users as needed
  ];

  // Insert sample users into database
  User.insertMany(sampleUsers)
    .then(() => {
      console.log('Sample users inserted successfully');
      // Close the database connection
      mongoose.connection.close();
    })
    .catch(err => {
      console.error('Error inserting sample users:', err);
      // Close the database connection
      mongoose.connection.close();
    });
});
