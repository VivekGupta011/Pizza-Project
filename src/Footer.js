import React from "react";
import { Link } from "react-router-dom";
import githublogo from '../src/images/githublogo.png'
import '../src/App.css'
// import {Achor} from 'antd';
export function Footer(){
    return(
        <>
        <div className="Custom-Footer custom-bottom">
            <p className="custom-paragraph">All Rights Reserved ©. Developed by <a href="https://github.com/vivekgupta011" target="_blank"> <strong style={{fontWeight:500}}>Vivek Gupta</strong> <img src={githublogo} style={{width:30,paddingLeft:3}}/></a></p>

        </div>
        </>
    );
}