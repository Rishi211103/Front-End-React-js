import React from "react";
import { useForm } from "react-hook-form";
import luffy from "./assets/images.jpg"

export default function Reachookform(){
    const {register,handleSubmit}=useForm();

    const onsubmit=(data) =>{
        console.log(data);
        
    };
    return(
        <div>
            <h1 style={{color:"green", backgroundColor:"black"}}>React Hook Form</h1>

            <img src={luffy} />
            <br></br>

            <input {...register("name")} placeholder="enter" />

            <br></br>
            <br></br>

            <input {...register("age")}  type="number" /> 

            <br></br><br></br>

            <input {...register("email")} type="email" />

            <button onClick={handleSubmit(onsubmit)}>submit</button>
        </div>
    );
}