import React from "react";
import { Link } from "react-router-dom";

export default function Routerreact(){
    return(
        <nav style={{display:"flex",justifyContent:"center",alignItems:"center",
        background:"#1b1a1aff", gap:"2rem", padding:"1rem",position:"fixed",top:"0",left:"0",width:"100%"}}>
            <Link to="/">Home</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/about">About</Link>

        </nav>

        
    );
}