import React,{useEffect, useState} from "react";

export const HookUsestateBasic=()=>{
    const [count,setCount]=useState(0);
    const [multiply,setMultiple]=useState(1);
    const [obj,setObject]=useState({name:"vivek",last:"Gupta",id:4});

    useEffect(()=>{
       setTimeout(()=>{
        document.title=`${count} this count number!`;
       },1000)
    },[count])
    
    // when we using without destructuring concept then we have to write code in this way
    // const arry=useState(0);
    // const arry1=arry[0];
    // const arry2=arry[1];
    // console.log(arry1);
    // console.log(arry2);
    // console.log(arry);

    function Increase(){
        setCount(count + 1);
    }
    function Decrease(){
        setCount(count - 1);
    }

    function multiplyTable(){
        setMultiple(multiply*5)


    }
    function setObjectfunc(){
        setObject((prev)=>({
            ...prev,id:obj.id+1
        }));
        
        
    }
    console.log(obj);

    return(
        <div>
            <h1>Hello Vivek!:{count}</h1>
            <button onClick={Increase}>Increase</button>
            {/* <h1>Hello Vivek!:{count}</h1> */}
            <button onClick={Decrease}>Decrease</button>
            <h1>This is Implementation of multiplication table{multiply}</h1>
            <button onClick={multiplyTable}>multiply</button>
            <hr/>
            <h1>Now we will pass object inside useState</h1>
            <p>FirstName: {obj.name} LastName: {obj.last} Id:{obj.id}</p>
            <button onClick={setObjectfunc}>Id Increase</button>
            
        </div>
    )

}
