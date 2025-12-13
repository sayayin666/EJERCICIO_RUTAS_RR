import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./COMPONENTES/Login"
import Register from "./COMPONENTES/Register"
import Cart from "./COMPONENTES/Cart"
import Products from "./COMPONENTES/Products"
import ProductDetail from "./COMPONENTES/ProductDetail"
import Home from "./COMPONENTES/Home"
import Notfound from "./COMPONENTES/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/productdetails" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/notfound" element={<Notfound></Notfound>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
