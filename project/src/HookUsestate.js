import React, { useState } from "react";

export function HookUsestate(){
    const [name,setNamee]=useState("");
    const [counterr,setCounterr]=useState(0);

    function changeNumber(){
        console.log("clicked");
        return setCounterr(counterr+1)
    }

    return(
        <>
        <input type="text" onChange={e=>setNamee(e.target.value)} />
        <h2>This name {name} is number{counterr}</h2>
        <button type="button" onClick={changeNumber}>Click it</button>
        
        </>
    )
}