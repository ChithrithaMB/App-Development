// Pat2.jsx
import React, { useState } from 'react';
import '../assets/css/Pat2.css'; // Import the CSS file

const initialPatients = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male', condition: 'Routine Checkup', bloodGroup: 'A+' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', condition: 'Allergy', bloodGroup: 'B-' },
  // Add more patients as needed
];

const Pat2 = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [newPatient, setNewPatient] = useState({});
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const genders = ['Male', 'Female', 'Other']; // Add more options as needed
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+']; // Add more options as needed

  const handleInputChange = (e) => {
    if (isEditing) {
      // Update existing patient's information in both the table and view
      setPatients((prevPatients) =>
        prevPatients.map((patient) =>
          patient.id === selectedPatient.id ? { ...patient, [e.target.name]: e.target.value } : patient
        )
      );
      setSelectedPatient({
        ...selectedPatient,
        [e.target.name]: e.target.value,
      });
    } else {
      // Add new patient's information
      setNewPatient({
        ...newPatient,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.gender && newPatient.condition && newPatient.bloodGroup) {
      setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
      setNewPatient({});
    }
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
    setSelectedPatient(null);
    setIsEditing(false);
  };

  const handleViewPatient = (id) => {
    setSelectedPatient(patients.find((patient) => patient.id === id));
    setIsEditing(false);
  };

  const handleEditPatient = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // If editing is canceled, revert the selectedPatient back to the original data
    setSelectedPatient(patients.find((patient) => patient.id === selectedPatient.id));
  };

  return (
    <div className="admin-patient-container">
      <h2>Admin Patients</h2>

      {/* Add New Patient Form */}
      <div className="form-section">
        <h3>{isEditing ? 'Edit Patient' : 'Add New Patient'}</h3>
        <div className="form-container">
          <label>Name:</label>
          <input type="text" name="name" value={isEditing ? selectedPatient?.name : newPatient.name || ''} onChange={handleInputChange} />

          <label>Age:</label>
          <input type="number" name="age" value={isEditing ? selectedPatient?.age : newPatient.age || ''} onChange={handleInputChange} />

          <label>Gender:</label>
          <select name="gender" value={isEditing ? selectedPatient?.gender : newPatient.gender || ''} onChange={handleInputChange}>
            <option value="" disabled>
              Select Gender
            </option>
            {genders.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label>Condition:</label>
          <input type="text" name="condition" value={isEditing ? selectedPatient?.condition : newPatient.condition || ''} onChange={handleInputChange} />

          <label>Blood Group:</label>
          <select name="bloodGroup" value={isEditing ? selectedPatient?.bloodGroup : newPatient.bloodGroup || ''} onChange={handleInputChange}>
            <option value="" disabled>
              Select Blood Group
            </option>
            {bloodGroups.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="button-group">
            <button onClick={isEditing ? handleSaveEdit : handleAddPatient}>
              {isEditing ? 'Save Edit' : 'Add Patient'}
            </button>
            {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
          </div>
        </div>
      </div>

      {/* Display the list of patients */}
      <ul className="patient-list">
        <li className="list-header">
          <span>Action</span>
          <span>Name</span>
          <span>Age</span>
          <span>Gender</span>
          <span>Condition</span>
          <span>Blood Group</span>
        </li>
        {patients.map((patient) => (
          <li key={patient.id} className="patient-item">
            <span className="action-buttons">
              <button onClick={() => handleViewPatient(patient.id)}>View</button>
              <button onClick={handleEditPatient}>Edit</button>
              <button onClick={() => handleDeletePatient(patient.id)}>Delete</button>
            </span>
            <span>{patient.name}</span>
            <span>{patient.age}</span>
            <span>{patient.gender}</span>
            <span>{patient.condition}</span>
            <span>{patient.bloodGroup}</span>
          </li>
        ))}
      </ul>

      {/* View/Edit Patient Details */}
      {(selectedPatient || isEditing) && (
        <div className="patient-details">
          <h3>{isEditing ? 'Edit Patient Details' : 'View Patient Details'}</h3>
          <p>
            Name:{' '}
            {isEditing ? (
              <input type="text" name="name" value={selectedPatient?.name} onChange={handleInputChange} />
            ) : (
              selectedPatient?.name
            )}
          </p>
          <p>
            Age:{' '}
            {isEditing ? (
              <input type="number" name="age" value={selectedPatient?.age} onChange={handleInputChange} />
            ) : (
              selectedPatient?.age
            )}
          </p>
          <p>
            Gender:{' '}
            {isEditing ? (
              <select name="gender" value={selectedPatient?.gender} onChange={handleInputChange}>
                <option value="" disabled>
                  Select Gender
                </option>
                {genders.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              selectedPatient?.gender
            )}
          </p>
          <p>
            Condition:{' '}
            {isEditing ? (
              <input type="text" name="condition" value={selectedPatient?.condition} onChange={handleInputChange} />
            ) : (
              selectedPatient?.condition
            )}
          </p>
          <p>
            Blood Group:{' '}
            {isEditing ? (
              <select name="bloodGroup" value={selectedPatient?.bloodGroup} onChange={handleInputChange}>
                <option value="" disabled>
                  Select Blood Group
                </option>
                {bloodGroups.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              selectedPatient?.bloodGroup
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Pat2;
