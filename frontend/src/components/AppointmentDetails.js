// src/components/AppointmentDetails.js
import React from 'react';

const AppointmentDetails = ({ appointment }) => (
  <div>
    <h3>Appointment Details</h3>
    <p>Name: {appointment.name}</p>
    <p>Contact: {appointment.contact}</p>
    <p>Email: {appointment.email}</p>
    <p>Date: {appointment.date}</p>
    <p>Time: {appointment.time}</p>
  </div>
);

export default AppointmentDetails;
