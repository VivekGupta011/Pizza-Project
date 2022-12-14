import React, { useState } from "react";
import "./App.css";
import logo from "../src/images/logoImg.png";
import cart from "../src/images/cart.png";
import {useNavigate} from "react-router-dom";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import order1 from "../src/images/order1.png";
import order2 from "../src/images/order2.png";
import order3 from "../src/images/order3.png";
import {OrderDelivery} from "./OrderDelivery";

export function Order() {
  const navigate=useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdding1, setIsAdding1] = useState(false);
  const [isAdding2, setIsAdding2] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [disabled1, setdisabled1] = useState(false);
  const [disabled2, setdisabled2] = useState(false);
  const [isSubtract, setIsSubtract] = useState(false);
  const [isSubtract1, setIsSubtract1] = useState(false);
  const [isSubtract2, setIsSubtract2] = useState(false);
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  const decrementCounter1 = () => {
    setCounter1(counter1 - 1);
  };
  const decrementCounter2 = () => {
    setCounter2(counter2 - 1);
  };
  if (counter <= 0) {
    incrementCounter = () => {
      setCounter(0);
    };
  }

  function AddElement() {
    incrementCounter();
    setIsAdding(true);
  }
  function AddElement1() {
    incrementCounter1();
    setIsAdding1(true);
  }
  function AddElement2() {
    incrementCounter2();
    setIsAdding2(true);
  }
  function TestingNumber() {
    if (counter <= 0) {
      alert("atleast one item select..");
    }
  }
  function deleteElement() {
    TestingNumber();
    decrementCounter();
    setIsSubtract(true);
  }
  function deleteElement1() {
    TestingNumber();
    decrementCounter1();
    setIsSubtract1(true);
  }
  function deleteElement2() {
    TestingNumber();
    decrementCounter2();
    setIsSubtract2(true);
  }

  function orderFunction(){
    alert("Thank you,your order has been successfully completed!");
    navigate("/OrderDelivery");
  }

  setTimeout(() => {
    setIsAdding(false);
    setIsAdding1(false);
    setIsAdding2(false);
    setdisabled(false);
    setIsSubtract(false);
    setIsSubtract1(false);
    setIsSubtract2(false);
    
  }, 2000);
  return (
    <>
      <div className="container">
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
              <Link to="/Product">Product</Link>
            </li>
            <li className="cart-part">
              <Link to="/Order">
                <div style={{ display: "flex" }}>
                  <span style={{ position: "relative", bottom: -4 }}>5</span>
                  <img src={cart} style={{ width: 30, marginLeft: 5 }} />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="Order-item container">
            <div className="item">
              <img src={order1} style={{ width: 90, marginLeft: 5 }} />
              <p className="recipseName">
                <strong>Chicken premier</strong>
              </p>
              <p className="Pricice-discuss" style={{ fontWeight: 600 }}>
                ???500
              </p>
            </div>
            <div className="Pricing d-flex justify-content-center IncrementClass">
              <button
                disabled={isAdding}
                onClick={() => {
                  AddElement();
                }}
                className={"btn btn-secondary custom-button"}
              >
                +{isAdding ? "Added" : ""}
              </button>

              <strong>{counter}</strong>
              <button
                disabled={disabled}
                onClick={() => {
                  counter == 1 ? setdisabled(true) : deleteElement();
                }}
                className={"btn btn-secondary custom-button"}
              >
                -{isSubtract ? "Subract" : ""}
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="Order-item container">
            <div className="item">
              <img src={order2} style={{ width: 90, marginLeft: 5 }} />
              <p className="recipseName">
                <strong>Havana special</strong>
              </p>
              <p className="Pricice-discuss" style={{ fontWeight: 600 }}>
                ???599
              </p>
            </div>
            <div className="Pricing d-flex justify-content-center IncrementClass">
              <button
                disabled={isAdding1}
                onClick={() => {
                  AddElement1();
                }}
                className={"btn btn-secondary custom-button"}
              >
                +{isAdding1 ? "Added" : ""}
              </button>

              <strong>{counter1}</strong>
              <button
                disabled={disabled}
                onClick={() => {
                  counter1 == 1 ? setdisabled(true) : deleteElement1();
                }}
                className={"btn btn-secondary custom-button"}
              >
                -{isSubtract1 ? "Subract" : ""}
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="Order-item container">
            <div className="item">
              <img src={order3} style={{ width: 90, marginLeft: 5 }} />
              <p className="recipseName">
                <strong>Four cheese</strong>
              </p>
              <p className="Pricice-discuss" style={{ fontWeight: 600 }}>
                ???1200
              </p>
            </div>
            <div className="Pricing d-flex justify-content-center IncrementClass">
              <button
                disabled={isAdding2}
                onClick={() => {
                  AddElement2();
                }}
                className={"btn btn-secondary custom-button"}
              >
                +{isAdding2 ? "Added" : ""}
              </button>

              <strong>{counter2}</strong>
              <button
                disabled={disabled}
                onClick={() => {
                  counter2 == 1 ? setdisabled(true) : deleteElement2();
                }}
                className={"btn btn-secondary custom-button"}
              >
                -{isSubtract2 ? "Subract" : ""}
              </button>
            </div>
          </div>
          <hr></hr>


          
        </div>
          <button
                disabled={isAdding}
                onClick={()=>{orderFunction()}}
                className={"btn btn-dark custom-button"}
              >
              Order Now
          </button>


      </div>

      <Footer />
    </>
  );
}
