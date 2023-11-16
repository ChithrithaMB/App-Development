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

function Leftbar1() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard1')
}

const settingsHandler = ()=>{
    navigate('/Patient1')
}

const appointmentHandler = () =>{
    navigate('/Appointment1')
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
                  
                    <button className='left-bar-button nav-btn3' onClick={settingsHandler}>
                    <div className="button-text3">Patient</div>
                    <div class='hs'><HeartPulse/></div>
                    </button>

                    <button className='left-bar-button nav-btn5' onClick={appointmentHandler}>
                    <div className="button-text5">Appointments</div>
                    <div class='as'><CalendarDays/></div>
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

export default Leftbar1