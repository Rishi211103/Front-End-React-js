import React, { useState } from "react";

function Formstate(){
    const [name,setname]= useState("")

    const handlename=(e)=>{
        console.log(e.target.value);
        
    }
    
    return(
        <div>
            <input onChange={handlename} placeholder="enter ur name"></input>
             
        </div>
    )
}

export default Formstate