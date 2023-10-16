import React from 'react'
import '../assets/css/appointment.css'
import { Link } from 'react-router-dom';
const Appoint1 = () => {
  return (
    <>
   <div class="dropdown">
    <button class="dropbtn">Book your appointment</button>
    <div class="dropdown-content">
        <Link to="https://www.reservio.com/" target="_blank" rel="noopener noreferrer">Visit Reservio</Link>
        <Link to="https://www.booknmeet.com/" target="_blank" rel="noopener noreferrer">Visit booknmeet</Link>
        <Link to="https://services.india.gov.in/" target="_blank" rel="noopener noreferrer">Visit India government hospital</Link>
        <Link to="https://ehealth.kerala.gov.in/" target="_blank" rel="noopener noreferrer">Visit Kerala government hospital</Link>
    </div>
</div>
    </>
  )
}

export default Appoint1