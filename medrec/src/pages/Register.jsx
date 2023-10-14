import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar2 from './Navbar2'
import api from '../service1/api'


function Register() { 
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    // phone: '',
    password: ''
  })

  const handleSignUp = async () => {
    try {
      const response = await api.post('http://localhost:8080/api/v1/auth/register', {
        name: formdata.name,
        email: formdata.email,
        password: formdata.password
      });

      // Handle success, e.g., redirect to a success page or display a success message
      console.log('Signup Successful', response.data);
    } catch (error) {
      // Handle errors, e.g., display error messages
      console.error('Signup Error', error);
    }
  };


  const handleChange = evt => {
    const value = evt.target.value;
    setFormdata({
      ...formdata,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    // Call the handleSignUp function to attempt sign-up
    handleSignUp();
    
    // Clear the form fields
    setFormdata({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <>
    <div className="regbg">
      <Navbar2/>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form2 app-x-shadow' onSubmit={handleOnSubmit}>
            <h1 className='auth-heading'>Registration Form</h1>
              <input type="text" name="username" id="username" value={formdata.username} placeholder='username' onChange={handleChange} className='auth-field' required />
              <input type="email" name="email" id="email" value={formdata.email} placeholder='email' onChange={handleChange} className='auth-field' required />
              {/* <input type="number" name="phone" id="phone" value={formdata.phone} placeholder='phone' onChange={handleChange} className='auth-field' required /> */}
              <input type="password" name="password" id="password" value={formdata.password} placeholder='password' onChange={handleChange} className='auth-field' required />
              <button type='submit' className='auth-btn app-x-shadow'> Register </button>
          </form>

          <Link to='/login' className='auth-links'>Login</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register