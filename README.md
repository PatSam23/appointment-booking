# Appointment Booking Application

This project is an online appointment booking application for scheduling appointments with a Gastroenterologist at XYZ Hospital. It allows users to book appointments without needing to log in or sign up. Users need to provide their name, contact number, and optionally their email.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Book appointments by providing name, contact number, and email (optional).
- View all booked appointments on a calendar.
- Cancel or reschedule appointments.
- Receive notifications for successful booking, cancellation, and rescheduling.

## Technologies Used

- **Frontend:** React, React Big Calendar, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Styling:** CSS

## Project Structure

appointment-booking/
├── backend/
│ ├── models/
│ │ └── Appointment.js
│ ├── routes/
│ │ └── appointments.js
│ ├── index.js
│ └── server.js
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── Calendar.js
│ │ │ ├── BookAppointment.js
│ │ │ ├── AppointmentDetails.js
│ │ │ ├── Button.js
│ │ │ ├── FormInput.js
│ │ │ └── Notification.js
│ │ ├── App.js
│ │ └── index.js
├── .gitignore
├── README.md
├── package.json
└── ...


## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository and navigate to the backend directory:

```bash
git clone <repository-url>
cd appointment-booking/backend
```

2. Install the required dependencies:

```bash
npm install
```

3. Create a .env file in the backend directory and add your MongoDB URI:

```bash
MONGODB_URI=mongodb://localhost:27017/appointment-booking
```

4. Start the backend server:

```bash
node server.js
```

The backend server will run on http://localhost:5000

Frontend Setup
1. Open a new terminal window and navigate to the frontend directory:

```bash
cd appointment-booking/frontend
```
2. Install the required dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm start
```

The frontend server will run on http://localhost:3000.

Usage

Open your browser and go to http://localhost:3000.
Book an appointment by filling in the required details and submitting the form.
View the booked appointments on the calendar.
You can also cancel or reschedule appointments as needed.
Contributing
We welcome contributions to improve this project! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.