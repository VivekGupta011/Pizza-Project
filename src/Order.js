import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { CartContext } from "./CartContext";
import logo from "../src/images/logoImg.png";
import cart1 from '../src/images/cart.png';
import emptyCart from '../src/images/emptyCart.png';
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import order1 from "../src/images/order1.png";
import order2 from "../src/images/order2.png";
import order3 from "../src/images/order3.png";
import { OrderDelivery } from "./OrderDelivery";

export function Order() {


  // Context api
  const { cart, setCart } = useContext(CartContext);
  const [products, setProduct] = useState([]);
  const [PriceChecked, setPriceChecked] = useState(false);



  // stopping server request for updating pricing
  // post request using id
  useEffect(() => {
    if (!cart.items) {
      return;
    }

    if (PriceChecked) {
      return;
    }

    fetch('https://star-spark-pasta.glitch.me/api/products/cart-items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // for getting all key value from object in format of array so be use Object.keys
      // post request should be string format that's reasong we use JSON.stringify
      body: JSON.stringify({ ids: Object.keys(cart.items) })
    }).then(res => res.json())
      .then(products => {
        setProduct(products);
        setPriceChecked(true);
      })
  }, [cart]);

  console.log("vivekgupta!!");
  console.log(products);

  // for counting
  function getQuantity(ProductId) {
    return cart.items[ProductId];
  }

  // for Increment items
  function AddElements(ProductId) {
    const existingQuantity = cart.items[ProductId];

    const _cart = { ...cart };
    _cart.items[ProductId] = existingQuantity + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }

  // for Decrement element
  function Increment(ProductId) {
    const existingQuantity = cart.items[ProductId];
    if (existingQuantity === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[ProductId] = existingQuantity - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }


  // for each item price
  let TotalSum = 0;
  function GetPrice(ProductId, price) {
    const sum = price * getQuantity(ProductId);
    TotalSum += sum;
    return sum;
  }

  // for deleting each element
  function handleDelete(ProductId) {
    const _cart = { ...cart };
    const quantity = _cart.items[ProductId];
    delete _cart.items[ProductId];
    _cart.totalItems -= quantity;
    setCart(_cart);
    const updatedProductsList = products.filter((product) => product._id !== ProductId);
    setProduct(updatedProductsList);
  }













  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [isSubtract, setIsSubtract] = useState(false);
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
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


  function orderFunction() {
    window.alert('Order placed succesfully!');
    setProduct([]);
    setCart({});
    navigate("/OrderDelivery");
  }

  setTimeout(() => {
    setIsAdding(false);
    setdisabled(false);
    setIsSubtract(false);
  }, 2000);
  return (
    <>
      <div className="container" style={{ padding: 50, paddingTop: 15 }}>
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
                  <span style={{ position: "relative", bottom: -4 }}>{cart.totalItems ? cart.totalItems : 0}</span>
                  <img src={cart1} style={{ width: 30, marginLeft: 5 }} />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* conditional rendering */}

        {
          products.map(itemOfProduct => {
            return (
              <div style={{ padding: "0px 10% 0px" }} key={itemOfProduct._id}>
                <div className="mt-5">
                  <div className="Order-item container mb-3">

                    <div className="item">
                      <img src={itemOfProduct.image} style={{ width: 90, marginLeft: 5 }} />
                      <p className="recipseName">
                        <strong>{itemOfProduct.name}</strong>
                      </p>
                    </div>

                    <div className="Pricing d-flex justify-content-center IncrementClass">
                      <button
                        disabled={isAdding}
                        onClick={() => {
                          AddElements(itemOfProduct._id);
                        }}
                        className={"btn btn-secondary custom-button"}
                      >
                        +{isAdding ? "Added" : ""}
                      </button>

                      <strong>{getQuantity(itemOfProduct._id)}</strong>
                      <button
                        disabled={disabled}
                        onClick={() => { Increment(itemOfProduct._id) }}
                        className={"btn btn-secondary custom-button"}
                      >
                        -{isSubtract ? "Subract" : ""}
                      </button>
                    </div>

                    <div className="d-flex align-items-center">
                      <p className="Pricice-discuss" style={{ fontWeight: 600, marginBottom: 0, marginRight: 70 }}>
                        ₹{GetPrice(itemOfProduct._id, itemOfProduct.price)}
                      </p>
                    </div>

                    <div className="d-flex align-items-center">
                      <button onClick={() => { handleDelete(itemOfProduct._id) }} className={"btn btn-danger custom-button"}>Delete</button>
                    </div>
                  </div>
                  <hr></hr>
                </div>


              </div>

            )
          })
        }
        {products.length > 0 ?
          <>
            <div className="d-flex flex-column align-items-end">
              <div>
                <span style={{fontWeight:"bold"}}> <b> Total:₹{TotalSum} </b></span>
              </div>
            </div>

            <div>
              <button
                disabled={isAdding}
                onClick={() => { orderFunction() }}
                className={"btn btn-dark custom-button"}
              >
                Order Now
              </button>
            </div>
          </>

          : <img src={emptyCart} className="img-fluid rounded mx-auto" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }} />
        }



      </div>


      <Footer />
    </>
  );
}
