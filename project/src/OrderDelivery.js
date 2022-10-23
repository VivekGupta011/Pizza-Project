import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logoImg.png";
import cart1 from "../src/images/cart.png";
import "../src/App.css";
import {useNavigate} from "react-router-dom";
import { Order } from "./Order";
import { Products } from "./Products";
import { Footer } from "./Footer";
import { useContext } from "react";
import BgImage from "../src/images/Delivery.jpg";

export function OrderDelivery() {
    const navigate=useNavigate();
  return (
    <>
      {/* <div className="navbar navbar-expand-lg navbar-light px-3">
        <div className="container">
          <Link to="/Home">
            <img src={logo} />
          </Link>
        </div>
        <ul className="Nav-section d-flex ">
          <li className="">
            <Link to="/Home">Home</Link>
          </li>
          <li className="">
            {" "}
            <Link to="/ProductCollection">Product</Link>
          </li>
          <li className="cart-part">
            <Link to="/Order">
              <div style={{ display: "flex" }}>
                <span style={{ position: "relative", bottom: -4 }}>5</span>
                <img src={cart1} style={{ width: 30, marginLeft: 5 }} />
              </div>
            </Link>
          </li>
        </ul>
      </div> */}
     <div className="Message">
         <button className="btn py-3" style={{fontSize:25,fontWeight:600,outline:'none',textDecoration:'Underline'}} onClick={()=>{navigate("/Home")}}>Back Page</button>
        <div className="SuccessMessage"><h3 className="successParagraph"><strong>Thank you,your order has been successfully completed!</strong></h3></div>
     </div>
      <div>
      <img src={BgImage} className="BgImage" style={{ marginLeft: 5 }} />
      </div>
    </>
  );
}
