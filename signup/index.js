require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const os = require('os');
const app = express();

// Use the port from .env file, default to 3000 if not provided
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Root page' });
});

app.get('/signup', (req, res) => {
    res.json({ message: 'This is the endpoint from signup' });
});

app.get('/signup/ip', (req, res) => {
    const interfaces = os.networkInterfaces();
    let addresses = [];

    for (let interfaceName in interfaces) {
        for (let interface of interfaces[interfaceName]) {
            if (interface.family === 'IPv4' && !interface.internal) {
                addresses.push(interface.address);
            }
        }
    }

    res.json({ ip: addresses });
});

app.listen(port, () => {
    console.log(`signup is running on http://localhost:${port}`);
});
