import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./COMPONENTES/Login"
import Register from "./COMPONENTES/Register"
import Cart from "./COMPONENTES/Cart"
import Products from "./COMPONENTES/Products"
import ProductDetail from "./COMPONENTES/ProductDetail"
import Home from "./COMPONENTES/Home"
import Notfound from "./COMPONENTES/NotFound"
import Navbar from "./COMPONENTES/Navbar"

import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products addToCart={addToCart}></Products>}></Route>
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart}></ProductDetail>}></Route>
        <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart}></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
