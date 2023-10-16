import React from 'react'
import Layout from '../components/Layout'


import '../assets/css/style.css'
import Pat1 from "../pages/Pat1"

function Patients() {
    return (
        <>
       
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome Patients to Medilogix !</h1>
                </div>
                    <Pat1/>
                    
            </div>

        </>
    )
}

export default Patients