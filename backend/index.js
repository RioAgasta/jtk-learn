const express = require('express');
const { authenticate } = require('./middleware/authenticate');
const authRouter = require('./routes/auth'); // Import the auth routes
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Use the authentication routes
app.use('/auth', authRouter); 

// Protected route example
app.get('/protected-route', authenticate, (req, res) => {
  res.send('You have access to this route');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
