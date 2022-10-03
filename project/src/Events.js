import React from "react";

export function Event(){
    const shoot=(a)=>{
        alert(a);
    }
    return(
        <>
        <h2 id="">this is Testing of Event handler</h2>
        <button onMouseOut={()=>shoot("hello!")}>Take the shot!</button>
        </>
    )
}