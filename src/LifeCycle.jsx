import React, { useEffect, useState } from "react";

function LifeCycle() {

    
    const [count,setcount]= useState(0)
    const [name,setname]= useState("zoro")
    useEffect(()=>{
        console.log("RK");
        
        return ()=>{
            console.log("dead");
            
        }
    },[name])

    const handlead=()=> {
        setcount(count + 1);
    }
    const handlename=()=>{
        setname("luffy")

    }
    return(
        <div>
            <h1> Hook-Useeffect </h1>
            {count} {name}

            <button onClick={handlead}>ad</button>

            <button onClick={handlename}>change</button>
        </div>

    )
}

export default LifeCycle