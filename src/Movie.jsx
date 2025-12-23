import React from "react";

import movie from "./assets/movie.webp"
export default function Movie(){
    return(
        <div>
            <h1 style={{color:"green", backgroundColor:"black"}}>Movie Page</h1>
            <h2>Stranger Things</h2>
            <br></br>
            <img src={movie} height={500} width={500}></img>
        </div>
    )
}