import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../src/images/logoImg.png';
import cart1 from '../src/images/cart.png';
import HeroImg from '../src/images/pizzabg.png'
import '../src/App.css';
import { Products } from "./Products";
import {Footer} from "./Footer";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export function Home(){
    const [Item,setItem]=useState([]);
    const {cart}=useContext(CartContext);
    console.log("this is cart from home page",cart);

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
                <li className=""> <Link to="/ProductCollection">Product</Link></li>
                <li className="cart-part">
                    <Link to="/">
                    <div style={{display:'flex'}}>
                    <span style={{position:'relative',bottom:-4}}>{cart.totalItems ? cart.totalItems : 0}</span>
                    <img src={cart1} style={{width:30,marginLeft:5}}/>
                    </div>
                    </Link>
                </li>

            </ul>

        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center custom-responsive-hero">
                    <ul className="leftData">
                        <p className="HeroText" style={{margin:0}}>Are you hungry?</p>
                        <h1 className="Heroh1">Don't wait!</h1>
                       <Link to='/ProductCollection'> <button className="btn btn-dark mybtn">Order Now</button></Link>

                    </ul>
                </div>
                <div className="col-12 col-md-6 custom-img">
                    <img src={ HeroImg} style={{width:'65%'}}/>
                </div>
            </div>
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
    )
}
