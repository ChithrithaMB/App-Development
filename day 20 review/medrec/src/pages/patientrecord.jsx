import React from "react";
import PForm from "./patientrecordform";
import '../assets/css/patientrecordform.css';
import { Link } from 'react-router-dom';
const Pform2=()=>{
  return(
    <div className="brownMycontainer2">
      <div className="browncard12">
       
      <div className="browncard2">
        <div className="browncard-header2">Patient Medical Record</div>
      
          </div>
          <PForm/>
          </div>

      
    </div>
    )
}

export default Pform2;