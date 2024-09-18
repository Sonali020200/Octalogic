const express = require('express');
const { getVehiclesByType, bookVehicle } = require('../controllers/bookingController');
const router = express.Router();

router.get('/vehicles/:wheels', getVehiclesByType);
router.post('/book', bookVehicle);

module.exports = router;
