import React from 'react'
import Slide from './Slide';
import Footer from './Footer';
import Navbar3 from './Navbar3';
import './Landing.css';
const Landing = () => {
  return (
    <>
    <div className="control-container">
    <Navbar3/>
    <Slide/>
    <Footer/>
    </div>
    </>
  );
}
export default Landing