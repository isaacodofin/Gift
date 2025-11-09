const express = require('express');
const app = express();
const __path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the pairing HTML page
app.use('/', async (req, res, next) => {
    res.sendFile(__path + '/pair.html')
})

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════╗
║   PAIRING SITE RUNNING         ║
║   Port: ${PORT}                    ║
╚════════════════════════════════╝

🌐 Site: http://localhost:${PORT}
📡 Uses API: https://pair-v44u.onrender.com

Don't Forget To Give Star ⭐
    `);
})

module.exports = app;
