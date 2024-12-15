const express = require('express');
const cors = require('cors'); // Import cors
const { authenticate } = require('./middleware/authenticate');
const authRouter = require('./routes/authRoutes'); // Import the auth routes
const courseRouter = require('./routes/courseRoutes'); // Import the course routes
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routers
app.use('/auth', authRouter);
app.use('/courses', authenticate, courseRouter);

// Protected route example
app.get('/protected-route', authenticate, (req, res) => {
  res.send('You have access to this route');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
