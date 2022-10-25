import "./App.css";
import logo from '../src/images/logoImg.png';
import cart from '../src/images/cart.png';
import React, { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import img from "../src/images/TestingImg.png"
import { Footer } from "./Footer";
import {Order} from "./Order";
export const Product = () => {
const [product,setProduct]=useState({});
const navigate=useNavigate();
const params=useParams();
console.log("this is params",params.id); 
useEffect(()=>{
  fetch(`https://star-spark-pasta.glitch.me/api/products/${params.id}`)
  .then(res=>res.json())
  .then(product=>{
    setProduct(product);
    console.log("this is data:",product);
  })
},[])

  return (
    <>
     <div className="navbar navbar-expand-lg navbar-light px-3">
            <div className="container">
               <Link to='/Home'><img src={logo}/></Link>
            </div>
            <ul className="Nav-section d-flex ">
                <li className=""><Link to="/Home">Home</Link></li>
                <li className=""> <Link to="/ProductCollection">Product</Link></li>
                <li className="cart-part">
                    <Link to="/Order">
                    <div style={{display:'flex'}}>
                    <span style={{position:'relative',bottom:-4}}>5</span>
                    <img src={cart} style={{width:30,marginLeft:5}}/>
                    </div>
                    </Link>
                </li>

            </ul>

        </div>
      <div className="container custom-container">
        <div className="row custom-row">
          <div className="col-8 custom-single-product">
          <button className="btn py-3" style={{fontSize:25,fontWeight:400,outline:'none'}} onClick={()=>{navigate("/Home")}}>Back</button>
            <div className="custom-img d-flex">
             <div>
             <img className="" src={product.image} style={{ width: "70%" }} />
             </div>
              <div>
              <p className="py-2"
                style={{
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {product.name}
              </p>
              <p className="py-2" style={{ padding: 3, margin: 0 }}>
                <span className="custom-bg ">{product.size}</span>
              </p>
              <div className="Pricing d-flex flex-column">
                <p style={{ fontWeight: 600 }}>₹{product.price}</p>
                <Link to='/Order'> <button className="btn btn-dark mybtn">Order Now</button></Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
};
