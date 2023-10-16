import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Patient from './pages/Patient';
import Home from './pages/Home';
import Footer from './pages/Landing';
import Privacy from './pages/privacy';
import AboutUs from './pages/AboutUs';
import Freq from './pages/Freq';
import Terms from './pages/Terms';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Record from './pages/Record';
import List from './pages/list';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <BrowserRouter>

      
       
         
         <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/Landing' element={<Footer />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Doctors' element={<Doctors />} />
          <Route path='/Patient' element={<Patient />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/Freq' element={<Freq />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/' element={<Footer />} />
          <Route path='/Appointment' element={<Appointment />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/record' element={<Record />} />
          <Route path="/list" element={<List />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser/>} />
         
        </Routes>

    </BrowserRouter>
  );
}

export default App;
