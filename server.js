// server.js
const express = require('express');
const cors = require('cors');
const mapRoutes = require('./routes/mapRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mount the map routes
app.use('/api/map', mapRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
