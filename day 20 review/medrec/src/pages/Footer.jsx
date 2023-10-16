import '../assets/css/Landing.css'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { MailOpen } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../pages/privacy'
import '../pages/Terms'
import './Freq'
import React, { useRef, useState } from 'react';
import { Copyright } from 'lucide-react';




const Footer = () => {
    return (
        <>
        


  
    
    
    
      <div className='footer'>
        <hr className='h'></hr>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <div class="para">
                            <h3><span>Welcome to </span>MEDILOGIX</h3>
                            <p1 class="text">Secure patient data management</p1>
                            <p class="text1">Easy collaboration among healthcare professionals</p>
                            </div>
                            <div className="round-icon">
                            
                            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook/>
        </Link>
      
                            </div>
                            <div className="round-icon1">
                            <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram/>
      </Link>
                            </div>
                            <div className="round-icon2">  
                            <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <MailOpen/>
      </Link>
                            </div>
                            <div className="round-icon3">
                            <Link to="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Linkedin/>
      </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <div className="links"> <h5>COMPANY</h5>
                        <hr className='h1'></hr>
                            <ul>
                                <li className="nav-item">
                                                 <Link to="/privacy">Privacy policy</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/Terms">Terms and Conditions</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/Freq">Frequently asked questions</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/AboutUs">About Us</Link>  
                                </li>
                                <li className="nav-item">
                                <Link to="/Contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <div className="link1">  <h5>Reach Us At</h5>
                        <hr className='h2'></hr>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 9453471254</p>
                            <p><i class="fa-solid fa-envelope"></i> Medilogix@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Coimbatore, India.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
               
            <div className='Last-footer'>
            
                <p class="foot">Copyright MEDILOGIX</p>
                <div className='cs'><Copyright /></div>
            </div>
            </div>
        </>
    )
}

export default Footer