// src/components/BookAppointment.js
import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', email: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', formData);
      alert('Appointment booked');
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
      <input type="text" name="contact" onChange={handleChange} placeholder="Contact Number" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email (optional)" />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookAppointment;
