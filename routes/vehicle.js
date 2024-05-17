// routes/vehicle.js
const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Get all vehicles
router.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new vehicle
router.post('/vehicles', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a vehicle
router.put('/vehicles/:registrationNumber', async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndUpdate(
      { registrationNumber: req.params.registrationNumber },
      req.body,
      { new: true }
    );
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a vehicle
router.delete('/vehicles/:registrationNumber', async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndDelete({
      registrationNumber: req.params.registrationNumber,
    });
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search by registration
router.get('/vehicles/search/registration', async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({
      registrationNumber: req.query.registrationNumber,
    });
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search by price
router.get('/vehicles/search/price', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({
      rentalPrice: { $lte: req.query.price },
    });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
