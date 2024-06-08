// backend/routes/appointments.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Create appointment
router.post('/', async (req, res) => {
  const { name, contact, email, date, time } = req.body;
  const newAppointment = new Appointment({ name, contact, email, date, time });
  await newAppointment.save();
  res.send('Appointment booked');
});

// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

// Update appointment
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, contact, email, date, time } = req.body;
  await Appointment.findByIdAndUpdate(id, { name, contact, email, date, time });
  res.send('Appointment updated');
});

// Delete appointment
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Appointment.findByIdAndDelete(id);
  res.send('Appointment deleted');
});

module.exports = router;
