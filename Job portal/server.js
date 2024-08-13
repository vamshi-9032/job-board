const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simple in-memory user data storage
const users = [];

// Sign-up route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Add the new user
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Sign-in route
app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Sign-in successful' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
