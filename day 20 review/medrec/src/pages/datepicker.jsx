import React, { useState } from "react";
function DatePick(){
    const [date,setDate]=useState();  
    
    console.log("Date" , date);
return(
        <div className="mbrc">
        <input type="date" onChange={e=>setDate(e.target.value)} />
        </div>
    );
}
export default DatePick;