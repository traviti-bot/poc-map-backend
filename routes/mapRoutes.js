// routes/mapRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../conf'); // Import the config module

router.post('/plotRoute', async (req, res) => {
    try {
        const { address1, address2 } = req.body;
        console.log("address1: " + address1);
        console.log("address2: " + address2);
        console.log("token: " + config.MAPBOX_ACCESS_TOKEN)

        // Call Mapbox Directions API to get route between the addresses
        // const response = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${address1};${address2}?access_token=${MAPBOX_ACCESS_TOKEN}`);
        // -96.50526%2C33.09641%3B-76.209458%2C39.613184?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&
        const response = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/-96.50526%2C33.09641%3B-76.209458%2C39.613184?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${config.MAPBOX_ACCESS_TOKEN}`);
        const route = response.data.routes[0]; // Get the first route returned by the API

        res.json({ route });
    } catch (error) {
        console.error('Error plotting route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
