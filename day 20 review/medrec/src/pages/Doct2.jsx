import React from 'react'
import '../assets/css/Doctor.css'
import { Link } from 'react-router-dom';
const Doct2= () => {
  return (
    <>
   <div class="dropdown1">
    <button class="dropbtn1">Consult Doctors</button>
    <div class="dropdown1-content">
        <Link to="https://www.mfine.co/online-doctor-consultation/" target="_blank" rel="noopener noreferrer">Visit mfine</Link>
        <Link to="https://www.apollo247.com/specialties/dermatology" target="_blank" rel="noopener noreferrer">Visit apollo</Link>
        <Link to="https://www.lybrate.com/consult-privately" target="_blank" rel="noopener noreferrer">Visit India government Lybrate</Link>
        <Link to="https://www.healthians.com/online-doctor-consultation" target="_blank" rel="noopener noreferrer">Visit Healthians</Link>
    </div>
</div>
    </>
  )
}

export default Doct2