import { useState, React } from "react";

export function Hookste() {
  const [name, setName] = useState("vivek")
  const [company, setCompany] = useState("Deloitte")
  const [student,setData]=useState("Vivek gupta")

  // creating a hook that holds a object
  const [car,setCar]=useState({
    brand:"ford",
    model:"mustang",
    year:"1956",
    color:"red"

  });
 

  const updateColor=()=>{
    setCar((previous)=>{
      return {...previous,color:"sky"}
    })
  }
  return (
    <>
      <h2>hello bhhh {name}</h2>
      <p>heyy {student} name {name} company {company}</p>
      <h2>hello vivek your comapny name {company}</h2>
      <button type="button" onClick={() => setName("green")}>
        Click me!
      </button>
      <button
        type="button"
        onClick={() => {
          setName("Red")
        }}
      >click me</button>
      <button
        type="button"
        onClick={() => {
          setCompany("Accenture!")
        }}
      >
        Click me for company!
      </button>
      <div>
        <h1>brand {car.brand} color {car.color} model {car.model}</h1>
        //this is objects and arrays in this.state.
        <h2>this is objects and arrays in this.state.</h2>
        <button type="button" onClick={updateColor}>Click to change the color</button>
        
      </div>
    </>
  );
}
