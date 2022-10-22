import React, { useState } from "react";
import "./App.css";
import logo from "../src/images/logoImg.png";
import cart from "../src/images/cart.png";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import order1 from "../src/images/order1.png";

export function Order() {
  const [isAdding, setIsAdding] = useState(false);
  const [counter,setCounter]=useState(1);
  const incrementCounter=()=>{setCounter(counter+1)}
  const decrementCounter=()=>{setCounter(counter-1)}
  if(counter<=0){
    incrementCounter=()=>{setCounter(0)};
  }
   
  function AddElement(){
    incrementCounter();
    setIsAdding(true);
  }
  function deleteElement(){
    decrementCounter();
    setIsAdding(true);
  }

  setTimeout(()=>{
    setIsAdding(false)
  },2000)
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light px-3">
        <div className="container">
          <Link to="/Home">
            <img src={logo} />
          </Link>
        </div>
        <ul className="Nav-section d-flex ">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            {" "}
            <Link to="">Product</Link>
          </li>
          <li className="cart-part">
            <Link to="/">
              <div style={{ display: "flex" }}>
                <span style={{ position: "relative", bottom: -4 }}>5</span>
                <img src={cart} style={{ width: 30, marginLeft: 5 }} />
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="Order-item container">
        <div className="item">
          <img src={order1} style={{ width: 60, marginLeft: 5 }} />
          <p>
            <strong>Chicken premier</strong>
          </p>
          <div className="Pricing d-flex justify-content-center">
            <p style={{ fontWeight: 600 }}>₹500</p>
            <button
              disabled={isAdding}
              onClick={()=>{AddElement()}}
              className={"btn btn-secondary"}
            >
              +{isAdding ? "Added" : ""}
            </button>

            <strong>{counter}</strong>
            <button
              disabled={isAdding}
              onClick={()=>{deleteElement()}}
              className={"btn btn-secondary"}
            >
              -{isAdding ? "Subract" : ""}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
