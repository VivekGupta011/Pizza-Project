import React from "react";
import ReactDOM  from "react-dom/client";

function Madegoal(){
    return <h1>Goal!</h1>
}

function Missgoal(){
    return <h1>Missed!</h1>
}

export function Conditional(props){
    const isGoal=props.isGoal;
    if(isGoal){
        return <Madegoal/>
    }
    return <Missgoal />

}

// Using Logical && Operator
export function Garagee(props){
    const cars=props.cars;
    
    return(
        
        <>
        

        <h1>Garage shop</h1>
        
            {

                
                cars.lenght > 0 &&
                <h2>you have {cars.lenght} cars in your Garage.</h2>

            }

            
        
        </>
    );
}




