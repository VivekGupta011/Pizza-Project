import React,{useEffect, useRef, useState} from "react";

export function HookuseReference(){
    const [add,setAdd]=useState(0);
    const [text,setText]=useState("");
    const count=useRef(0);
    const textRef=useRef(false);
    // useRef
    const inputEle=useRef();
    const handleClick=()=>{
        console.log(inputEle);
        inputEle.current.style.width="300px";
        inputEle.current.focus();
        inputEle.current.style.color="red";
        inputEle.current.style.background="red";
        inputEle.current.style.borderRadius='  10px';
    }
    console.log(count);

    function Increase(){
        setAdd(add+2);
    } 


// current is the predefined  properties
    useEffect(()=>{
        count.current=count.current+1;
        if(textRef.current != null){
            const dimension=textRef.current.getBoundingClientReact();
            console.log(dimension); 
        }
    })
    return(
        <div>
            <input type='text' ref={inputEle} />

            <br></br>
            <button onClick={handleClick}>Dom using React js</button>
            <input type='text' onChange={(e) => setText(e.target.value)} />
            <h1>`This is sequence of number {add}`</h1>
            <button onClick={Increase}>Click me!</button>
            <h2>Name:{count.current}</h2>
        </div>
    )
}