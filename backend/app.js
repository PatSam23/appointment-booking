// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointments');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/appointment-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/appointments', appointmentRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
