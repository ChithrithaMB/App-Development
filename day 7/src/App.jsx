import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Doctors from './pages/Doctor'
import Patients from './pages/Patient'
import Appointment from './pages/Appointment'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Features from './pages/Features'


function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/AboutUs' element={<AboutUs/>}/>
    <Route exact path='/Contact' element={<Contact/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Doctor' element={<Doctors/>}/>
    <Route exact path='/Patient' element={<Patients/>}/>
    <Route exact path='/Appointment' element={<Appointment/>}/>
    <Route exact path='/Features' element={<Features/>}/>
    <Route exact path='/Home' element={<Home/>}/>
 
    
   </Routes>
   
   </>
  )
}

export default App