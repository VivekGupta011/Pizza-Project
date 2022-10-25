import { Link,useParams} from "react-router-dom";
import React, { createContext, useState } from "react";
import {Contacts} from './Contacts'
export const Globalinfo=createContext();

export function Jokedata() {
  const {id}=useParams();
  console.log("this is useParmas",id);
  const [color,setColor]=useState('red');
  const getdata=(item)=>{
    console.log("this is item",item);

  }
     
  return(
    <Globalinfo.Provider value={{appColor:color,getdata:getdata}}>

    <div>
    <h1 style={{backgroundColor:color}}>hello vivek</h1>
    <h1 style={{color:color}}>this is jokedata page</h1>
    <Link to="Props_object/name">Vivek2</Link>
    <Link to="Props_object">Vivek1</Link>
    <Contacts />
    </div>

    </Globalinfo.Provider>
  );
}
