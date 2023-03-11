import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../src/App.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";


export function Products(Props) {

  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);
  
  let { _id } = useParams();
  const { apiDataa } = Props;

  // Adding button Event
  const addToCart = (event, product) => {
    event.preventDefault();
    console.log("this is event button", product, event);
    let _cart = { ...cart };  //{}
    console.log("this is cart.items", cart);
    if (!_cart.items) {
      _cart.items = {}     //  //{items:{}}
    }




    // using Bracket notation for accessing object value using key
    if (_cart.items[product._id]) {
      //_cart.items.product._id
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 3000)

  }

  function addcheck(e, apiDataa) {
    console.log('this is event and apiDataa!');
    console.log(e);
    console.log("apiDataa:");
    console.log(apiDataa);
    console.log("apiDataa:End");
  }
  return (
    <Link to={`/product/${apiDataa._id}`}>
      <>
        <div className="custom-img">
          <img className="" src={apiDataa.image} style={{ width: '70%' }} />
          <p style={{ textAlign: 'center', padding: 5, margin: 0, fontWeight: 600 }}>{apiDataa.name}</p>
          <p style={{ textAlign: 'center', padding: 3, margin: 0 }}><span className="custom-bg">{apiDataa.size}</span></p>
          <div className="Pricing d-flex justify-content-center">
            <p style={{ fontWeight: 600 }}>₹{apiDataa.price}</p>
            <button disabled={isAdding} onClick={(e) => { addToCart(e, apiDataa) }} className={`${isAdding ? 'btn-custom1' : 'btn btn-custom'}`}>Add{isAdding ? 'ed' : ''}</button>

          </div>
        </div>

      </>
    </Link>
  )
}