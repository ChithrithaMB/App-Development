import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Doctors from './pages/Doctors'
import Patient from './pages/Patient'
import Home from './pages/Home'
import Footer from './pages/Landing'
import Privacy from './pages/privacy'
import AboutUs from './pages/AboutUs'
import Freq from './pages/Freq'
import Terms from './pages/Terms'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Record from './pages/Record'


function App() {
  return (
   <>
   <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/Landing' element={<Footer/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Doctors' element={<Doctors/>}/>
    <Route exact path='/Patient' element={<Patient/>}/>
    <Route exact path='/privacy' element={<Privacy/>}/>
   <Route exact path='/Freq' element={<Freq/>}/>
   <Route exact path='/Terms' element={<Terms/>}/>
   <Route exact path='/' element={<Footer/>}/>
   <Route exact path='/Appointment' element={<Appointment/>}/>
   <Route exact path='/AboutUs' element={<AboutUs/>}/>
   <Route exact path='/Contact' element={<Contact/>}/>
   <Route exact path='/record' element={<Record/>}/>
   
 
    
   </Routes>
   
   </>
  )
}

export default App