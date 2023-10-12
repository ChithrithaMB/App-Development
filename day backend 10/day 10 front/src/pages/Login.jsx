import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import '../assets/css/login.css'
import Navbar1 from './Navbar1'
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault();

    
    const request = {
      "email" : formdata.username,
      "password": formdata.password
    }
    console.log(request)

    await axios.post("http://localhost:8181/api/v1/auth/login", formdata)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    
    dispatch(login({
      username :formdata.username
    }))
    navigate('/Dashboard')
  }
  return (
    <>
    <div className="logbg">
      <Navbar1/>
      <div className='auth-container'>
        <div className='auth-wrapper'>
    
          <form className='auth-form1 app-x-shadow1' onSubmit={submitHandler}>
            <h1 className='auth-heading'>Login Form</h1>
            <input type="email" name="username" id="username" value={formdata.username} onChange={handleChange} placeholder='Email' className='auth-field' required />
            <input type="password" name="password" id="password" value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />

            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
          </form>
            <Link to='/Register' className='auth-links1'>Register</Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login