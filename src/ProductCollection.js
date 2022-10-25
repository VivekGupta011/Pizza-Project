import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../src/images/logoImg.png';
import cart from '../src/images/cart.png';
import '../src/App.css';
import { Products } from "./Products";
import {Footer} from "./Footer";
export function ProductCollection(){
    const [Item,setItem]=useState([]);

    useEffect(()=>{
        fetch('https://star-spark-pasta.glitch.me/api/products')
        .then(response => response.json())
        .then(products =>{
            setItem(products);
            console.log("this data coming from api data typeof:",typeof products);
        })

    },[]);

    return(
        <>
        <div className="navbar navbar-expand-lg navbar-light px-3">
            <div className="container">
               <Link to='/Home'><img src={logo}/></Link>
            </div>
            <ul className="Nav-section d-flex ">
                <li className=""><Link to="/Home">Home</Link></li>
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
        <div className="container">
            <div className="row">
            <h4 className="py-4">
                        Products
                    </h4>
                <div className="Custom-responsive">
                    {console.log("this is item",Item)}

                   {
                    Item.map((apiData)=> <Products key={apiData._id} apiDataa={apiData}/>)

                   }

                </div>
            </div>
        </div>
        <Footer />
        </>
    );


}