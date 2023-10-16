import React from 'react'
import '../assets/css/contact.css'
import Footer from './Footer'



function Contact() {
  return (
      <>
      
      <form class="form">
  <h23 class='h23'>CONTACT US</h23>
  <p1 type="Name:"><input class='input'placeholder="Write your name here.."></input></p1>
  <p1 type="Email:"><input class='input'placeholder="Let us know how to contact you back.."></input></p1>
  <p1 type="Message:"><input class='input' placeholder="What would you like to tell us.."></input></p1>
  <button class='button'>Send Message</button>
  <div class="div11">
                    <div class='div2'>ContactUs at: 9896753231</div>
                    <div class='div3'>         Medilogix@gmail.com</div>
                </div>
</form>
    
     

    
<Footer/>
    </>
  )
}

export default Contact