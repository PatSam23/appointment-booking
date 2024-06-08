// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from './components/Calendar';
import BookAppointment from './components/BookAppointment';
import Notification from './components/Notification';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(res.data);
    };
    fetchAppointments();
  }, []);

  const handleBookAppointment = async (appointment) => {
    try {
      await axios.post('http://localhost:5000/api/appointments', appointment);
      setNotification({ message: 'Appointment booked successfully', type: 'success' });
      const res = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(res.data);
    } catch (err) {
      setNotification({ message: 'Failed to book appointment', type: 'error' });
    }
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <Calendar events={appointments.map((appt) => ({
        title: `Appointment with ${appt.name}`,
        start: new Date(`${appt.date}T${appt.time}`),
        end: new Date(`${appt.date}T${appt.time}`),
      }))} />
      <BookAppointment onSubmit={handleBookAppointment} />
    </div>
  );
};

export default App;
