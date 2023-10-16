import React from 'react'
import '../assets/css/Doct1.css'
import { Link } from 'react-router-dom'
const Doct1 = () => {
  return (
    <>
     <div class="container11">
 <div class="wrapper">
   <div class="banner-image11"> </div>
   <h111> Dr. Swathe Anand</h111>
   <p12>MBBS, MD - General Medicine <br/>
   General Physician</p12>
  </div>
  <div class="button-wrapper"> 
  <Link to="https://www.practo.com/coimbatore/doctor/swathe-anand-general-physician?practice_id=1348510&specialization=Doctor&referrer=doctor_listing&page_uid=e632413f-6e8a-45ed-96d9-0805d5d04136"><button class="btn outline">DETAILS</button></Link>
    <button class="btn fill">DOCTOR</button>
  </div>
    </div>

                    <div class="container12">
 <div class="wrapper">
   <div class="banner-image12"> </div>
   <h111>Dr. Prince Herbert</h111>
   <p12>BDS<br/>
   Dentist,Cosmetic/Aesthetic Dentist,Implantologist</p12>
  </div>
  <div class="button-wrapper"> 
  <Link to="https://www.practo.com/coimbatore/doctor/dr-capt-prince-herbert-dentist?practice_id=1036582&specialization=Doctor&referrer=doctor_listing&page_uid=e632413f-6e8a-45ed-96d9-0805d5d04136"><button class="btn outline">DETAILS</button></Link>
    <button class="btn fill">DOCTOR</button>
  </div>
    </div>

    </>
  )
}

export default Doct1