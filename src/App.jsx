import React, { useState } from "react";
import Cric from "./Cric";
import ApicallHook from "./ApicallHook";
import Formstate from "./Formstate";
import Details from "./Details";
import Reachookform from "./Reacthookform";

import Routerreact from "./Routerreact";
import Movie from "./Movie";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Errorhandling from "./Errorhandling";
import ImageSlider from "./ImageSlider";

import img1 from "./assets/Avengers.jpg";
import img2 from "./assets/Spider.jpg";
import img3 from "./assets/Harry.jpg";
import img4 from "./assets/Iron.jpg";
import img5 from "./assets/Dune.jpg"
import Todolist from "./Todolist";
import MovieCard from "./MovieCard";
import CountClass from "./CountClass";
import MovieApi from "./MovieApi";
import Navbar2 from "./Navbar2";
import Navbar1 from "./Navbar1";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import Navbar5 from "./Navbar5";
import Contact from "./Contact";

import Reactdata from "./Reactdata";


  



function App() {
  const [showMovies, setShowMovies] = useState(false);
  
  const images = [img1, img2, img3,img4,img5]
   const [page, setPage] = useState("home");


  return (
    <div>
{/* 
      <Navbar />
      <ImageSlider images={[img1, img2,img4,img5, img3]} /> */}

      {/* <Todolist/>  */}
      <div>

        <br>
        </br>
        {/* <Reactdata/> */}



        

      
      {/* <MovieApi/> */}
      {/* <ApicallHook/> */}
      {/* <Navbar2/>
      <Navbar3/>
      <Navbar1/>
      <Navbar4/>
      <Navbar5/> */}
      

      
    
         <>
      <Navbar
        onHomeClick={() => setPage("home")}
        onMoviesClick={() => setPage("movies")}
        onContactClick={() => setPage("contact")}
      />

        {page === "home" && <ImageSlider images={images} />}
      {page === "movies" && <MovieCard />}
      {page === "contact" && <Contact />}
    </>
        

      {/* <CountClass></CountClass>
         */}
      </div>  




      {/* <Errorhandling/> */}
    </div>
  )
}
export default App