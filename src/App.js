import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import "./index.css";
import { ProductDetail } from "./ProductDetail";
import {Order} from "./Order";
import { Product } from "./Product";
import { Products } from "./Products";
import { Home } from "./Home";
import { ProductCollection } from "./ProductCollection";
import {CartContext} from "./CartContext";
import {OrderDelivery} from "./OrderDelivery";
import 
{ useEffect,
useState } from "react";
import { Footer } from "./Footer";

function App() {
  const [cart,setCart]=useState({});

 
  
  useEffect(()=>{
    // converting string value into object using JSON.parse(cart)
    const cart=window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
  },[]);

   // fetch cart from local storage
   useEffect(()=>{
    // localStorage only access data in form of String! for that reason we have use JSON.stringify
    window.localStorage.setItem('cart',JSON.stringify(cart));

  },[cart]);

 
  return (
    <>
    <Routing>
      <CartContext.Provider value={{cart,setCart}}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Product/:id" element={<Product />} />
        <Route path="Products" element={<Products />} />
        <Route path="Home" element={<Home />} />
        <Route path="Order" element={<Order />} />
        <Route path="ProductDetail" element={<ProductDetail />} />
        <Route path="OrderDelivery" element={<OrderDelivery />} />
        <Route path="ProductCollection" element={<ProductCollection />} />
        <Route path="*" element={<Home />} />
      </Routes>
     

      </CartContext.Provider>
    </Routing>
    </>
  );
}

export default App;
