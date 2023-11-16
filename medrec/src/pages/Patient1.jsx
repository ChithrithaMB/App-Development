import React from 'react'
import Layout1 from '../components/Layout1'


import '../assets/css/style.css'
import Pat1 from "../pages/Pat1"
import Pat2 from "../pages/Pat2"
function Patients() {
    return (
        <>
       
            <Layout1 />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome Patients to Medilogix !</h1>
                </div>
                    <Pat1/>
                    <Pat2/>
            </div>

        </>
    )
}

export default Patients