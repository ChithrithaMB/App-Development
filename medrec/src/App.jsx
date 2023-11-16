import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import Login from './pages/Login';
import Login1 from './pages/Login1';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';
import Doctors from './pages/Doctors';
import Patient from './pages/Patient';
import Patient1 from './pages/Patient1';
import Home from './pages/Home';
import Footer from './pages/Landing';
import Privacy from './pages/privacy';
import AboutUs from './pages/AboutUs';
import Freq from './pages/Freq';
import Terms from './pages/Terms';
import Appointment from './pages/Appointment';
import Appointment1 from './pages/Appointment1';
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
          <Route path='/Login1' element={<Login1 />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Dashboard1' element={<Dashboard1 />} />
          <Route path='/Doctors' element={<Doctors />} />
          <Route path='/Patient' element={<Patient />} />
          <Route path='/Patient1' element={<Patient1 />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/Freq' element={<Freq />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/' element={<Footer />} />
          <Route path='/Appointment' element={<Appointment />} />
          <Route path='/Appointment1' element={<Appointment1 />} />
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
