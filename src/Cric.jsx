import React from "react";
import Score from "./Score";
import Player from "./Player";
import Counter from "./Counter";
import Boundary from "./Boundary";
 

function Cric(){
    return(
        <div>
            
            <Score />
            <Player/>
            <Counter/>
            <Boundary/>
        </div>
    )
}
export default Cric