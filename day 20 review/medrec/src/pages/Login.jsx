import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { setEmail } from '../redux/actions';
import { ToastContainer ,toast} from 'react-toastify';
import '../assets/css/login.css'
import Navbar1 from './Navbar1'
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!isEmailValid(email)) {
      toast.error('Invalid email address', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!isPasswordValid(password)) {
      toast.error('Password must be at least 8 characters long', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login Response:', response);
      if (response.status === 200) {
        const token = response.data.token; 
        const userEmail = formData.email;
        dispatch(setEmail(userEmail));
      
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('authToken',token);
        toast.success('Login successful!', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        navigate('/dashboard');
      } else {
        toast.error('Login failed. Please try again.', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while logging in. Please try again.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className='main_login'>
    <div className="signup-container">
    
    <div className="sections">
      <form>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required />
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required />
        <div className="form-button-container">
          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <p className='no_acc'> <Link to="/register">Don't have an account? Signup</Link></p>
      </form>
      </div>
    
    </div>

  </div>
  )
}

export default Login