import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/Pat.css'
import { Link } from 'react-router-dom'
const Pat1 = () => {
  return (
    <>
     <div class="btn">
  <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
    <i class="fab fa-linkedin"></i>
  </a>
</div>

<div class="first hero">
  <img class="hero-profile-img" src="https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q=" alt=""/>
  <div class="hero-description-bk"></div>
  <div class="hero-logo">
    <img src="https://media.istockphoto.com/id/1139549801/vector/stethoscope-heart-icon.jpg?s=612x612&w=0&k=20&c=qEJ7fFxWkok8j7FYYj4NwAlHSgqsw-azZz7c3IQJ4KI=" alt=""/>
  </div>
  <div class="hero-description">
    <p>Skip the travel!
Take Online Doctor Consultation</p>
  </div>
  
  <div class="hero-btn">
    <Link to="https://www.medibuddy.in/doctors/online-consultation">CONSULT NOW</Link>
  </div>
</div>

<div class="second hero">
  <img class="hero-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3B65RaXZXWDz8Nk01FOCcROGQD3Yrfpp70rNFSdTLYxiwAB2mKXKX6mB5T6UmxCdVoY&usqp=CAU" alt=""/>
  <div class="hero-description-bk"></div>
  <div class="hero-logo">
    <img src="https://t4.ftcdn.net/jpg/01/05/87/39/360_F_105873997_wItdPBj2S96YfgPQYK11079yZXu7pBFc.jpg" alt=""/>
  </div>
  <div class="hero-description">
    <p>Buy Medicines and Essentials.</p>
  </div>
  
  <div class="hero-btn">
  <Link to="https://www.apollopharmacy.in/?utm_source=google&utm_medium=srnb&campaignid=19577784956&adgroupid=152076783504&keyword=online%20medicine&device=c&adtype=&product_id=&utm_campaign=Apollo_Non-Brand_Pharmacy_RestCities_New_160123&utm_content=Medicine_Online_EM&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu1jlZ3GA5XnID5r0Vtu4DSM2g8TX4kRJDs0FVbYmP_WhnvTxDqmCdMaAm0UEALw_wcB">GET YOUR MEDICINES</Link>
  </div>
</div>
                
    </>
  )
}

export default Pat1