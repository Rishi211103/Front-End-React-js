import React, { useEffect, useState } from "react";

import axios from "axios";

export default function MovieApi() {


    const [moviedata, setmoviedata] = useState([])
    const handlefetch = async () => {
        let movie = await axios.get("https://fooapi.com/api/movies")
        // console.log(movie)
        setmoviedata(movie)
    }
    useEffect(() => {
        handlefetch()
    }, [])
    return (
        <div>
             {moviedata.map((data)=>{
              <h1>{data.title}</h1>
            })}


        </div>
    )
}