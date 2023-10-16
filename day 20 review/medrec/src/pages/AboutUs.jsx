import React from 'react'
import '../assets/css/aboutus.css'
import Footer from './Footer'


function AboutUs() {
  return (
      <>
      
    <div class="abg">
    <section class="about-us">
    <div class="about">
    <div><img class="square11" src={require('../assets/img/Abs.jpeg')} alt="user" /></div>
      <div class="text">
        <h2>About Us</h2>
        <h5 class='h7'>We take care of your <span>Better Health</span></h5>
          <p>MEDILOGIX is designed for people with various conditions who might need to track their health,medicine use,medications</p>
          <p class='p1'>We optimize workflow and streamline the operations leading to better customer service</p>
       
      </div>
    </div>
  </section>
  </div>
  <Footer/>
    
    </>
  )
}

export default AboutUs