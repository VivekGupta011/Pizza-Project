import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Contact } from "./Contact";
import {Globalinfo} from './Jokedata';
export const Contacts=()=>{
    const {appColor,getdata}=useState(Globalinfo);
    const paramdata=useParams();
    console.log("thsi is ",paramdata.id);
    const {name}=paramdata;
    console.log("this is useParams",name)
    return(
        <div className="ContactBody">

            <h1 style={{color:appColor,fontSize:100}}>this is Vivek Gupta</h1>
            <button onClick={()=>getdata("hello vivek")}>Click Me!</button>
            <Contact
                name="Vivek gupta"
                email="vivek@gmail.com"
                phone="867676867878" 
            />
            <Contact 
                name="Vivek gupta1"
                email="vivek1@gmail.com"
                phone="867676867878" 
            />
            <Contact
                name="Vivek2 gupta"
                email="vivek2@gmail.com"
                phone="867676867878" 
            />
        </div>
    )

}