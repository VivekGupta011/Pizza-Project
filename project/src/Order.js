import React from "react";
import "./App.css";
import logo from '../src/images/logoImg.png';
import cart from '../src/images/cart.png';
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import githublogo from '../src/images/githublogo.png'

export function Order(){
    return(
        <>


        <div className="navbar navbar-expand-lg navbar-light px-3">
            <div className="container">
               <Link to='/Home'><img src={logo}/></Link>
            </div>
            <ul className="Nav-section d-flex ">
                <li className=""><Link to="/">Home</Link></li>
                <li className=""> <Link to="">Product</Link></li>
                <li className="cart-part">
                    <Link to="/">
                    <div style={{display:'flex'}}>
                    <span style={{position:'relative',bottom:-4}}>5</span>
                    <img src={cart} style={{width:30,marginLeft:5}}/>
                    </div>
                    </Link>
                </li>

            </ul>

        </div>
       <Footer />
       
       
        </>
    );
}
