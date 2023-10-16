import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import '../assets/css/leftbar.css'
import { LogOut } from 'lucide-react';
import { HeartPulse } from 'lucide-react';
import { Stethoscope } from 'lucide-react';
import { Ratio } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { UserSquare2 } from 'lucide-react';

function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/Patient')
}
const usersHandler = () =>{
    navigate('/Doctors')
}
const appointmentHandler = () =>{
    navigate('/Appointment')
}
const recordHandler = () =>{
    navigate('/record')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn1' onClick={dashboardHandler}>
                    <span className="button-text1">Dashboard</span>
                    <div class='dbs'><Ratio/></div>
                    </button>
                    <button className='left-bar-button nav-btn2' onClick={usersHandler}>
                    <span className="button-text2">Doctor</span>
                    <div class='ds'><Stethoscope /></div>
                    </button>
                    <button className='left-bar-button nav-btn3' onClick={settingsHandler}>
                    <div className="button-text3">Patient</div>
                    <div class='hs'><HeartPulse/></div>
                    </button>
                    <button className='left-bar-button nav-btn5' onClick={appointmentHandler}>
                    <div className="button-text5">Appointments</div>
                    <div class='as'><CalendarDays/></div>
                    </button>
                    <button className='left-bar-button nav-btn6' onClick={recordHandler}>
                    <div className="button-text6">Medical Record</div>
                    <div class='rs'><UserSquare2 /></div>
                    </button>
                    <button className='left-bar-button-logout nav-btn4' onClick={logoutHandler}>
                    <div className="button-text4">  Logout</div>
                    <div class='ls'><LogOut /></div>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar