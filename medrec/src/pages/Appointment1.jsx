import React, { useState } from 'react';
import '../assets/css/AdApp.css'; // Import the CSS file

import Layout1 from '../components/Layout1';

const initialAppointments = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2023-11-14',
      time: '10:00 AM',
      reason: 'Checkup',
      place: 'Medical Center',
      imageLink: 'https://th.bing.com/th/id/OIP.aZDgV3OvYdydRcw84BzHQAHaIR?pid=ImgDet&rs=1',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2023-11-15',
      time: '02:30 PM',
      reason: 'Follow-up',
      place: 'Clinic',
      imageLink: 'https://th.bing.com/th/id/OIP.Cx8dJ5c9hp8vOnCQl5z_lQHaHa?pid=ImgDet&rs=1',
    },
    // Add more appointments as needed
  ];
  
  const Appointment1 = () => {

    const [appointments, setAppointments] = useState(initialAppointments);
    const [newAppointment, setNewAppointment] = useState({});
  
    const handleInputChange = (e) => {
      setNewAppointment({
        ...newAppointment,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleAddAppointment = () => {
      if (
        newAppointment.patientName &&
        newAppointment.date &&
        newAppointment.time &&
        newAppointment.reason &&
        newAppointment.place &&
        newAppointment.imageLink
      ) {
        setAppointments([...appointments, { id: appointments.length + 1, ...newAppointment }]);
        setNewAppointment({});
      }
    };
  
    const handleDeleteAppointment = (id) => {
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    };
  
    return (
      <div className="admin-appointments">
        <Layout1 />
        <h2>Admin Appointments</h2>
  
        {/* Add New Appointment Form */}
        <div>
          <h3>Add New Appointment</h3>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={newAppointment.patientName || ''}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            value={newAppointment.date || ''}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="time"
            value={newAppointment.time || ''}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="reason"
            placeholder="Reason for Appointment"
            value={newAppointment.reason || ''}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="place"
            placeholder="Appointment Place"
            value={newAppointment.place || ''}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imageLink"
            placeholder="Image Link"
            value={newAppointment.imageLink || ''}
            onChange={handleInputChange}
          />
          <button onClick={handleAddAppointment}>Add Appointment</button>
        </div>
  
        {/* Display the list of appointments */}
        <ul>
          <li className="list-header">
            <span>Patient Name</span>
            <span>Date</span>
            <span>Time</span>
            <span>Reason</span>
            <span>Place</span>
            <span>Image</span>
            <span>Action</span>
          </li>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <span>{appointment.patientName}</span>
              <span>{appointment.date}</span>
              <span>{appointment.time}</span>
              <span>{appointment.reason}</span>
              <span>{appointment.place}</span>
              <span>
                <img src={appointment.imageLink} alt={`${appointment.patientName}'s image`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </span>
              <span>
                <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Appointment1;