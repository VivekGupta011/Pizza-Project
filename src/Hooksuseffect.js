import { useEffect,useState } from "react";
export function Hooksuseffect(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState(false);
    const [number,setNumber]=useState(0);


    function Increment(){
        return setNumber(number+5);
    }
    function decrement(){
        return setNumber(number-1);
    }

    function Checkbutton(){
        console.log("clicked");
        return setName("vivek Gupta");

    }

    function Checkbutton1(){
        console.log("clicked");
        return setName("");
    }


    // updatig the value of count
    useEffect(()=>{
        setTimeout(()=>{setCount((count)=>count+1)},2000)
    },[]);


    return (
        <>
        <h1>I have rendered {count} times!</h1>
        <h1>I have rendered {name} times!</h1>
        <div>In this we going to appply ternary operator {name ? name : "empty you have to add name first!"}</div>
        <button type="button" onClick={Checkbutton}>Click me for update btn!</button>
        <button type="button" onClick={Checkbutton1}>Click me for update btn!</button>

        <div>
            <p>This is increment and decrement testing</p>
            <button type="button" onClick={Increment}>+</button>
            <h3>this is Number {number}</h3>
            <button type="button" onClick={decrement}>-</button>
        </div>
        </>
    )
}