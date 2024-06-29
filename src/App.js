import { createContext, React, useReducer, useState } from 'react'
import CustomNavBar from './layouts/CustomNavBar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './cartContext';
// export const CartContext = createContext();
export default function App() {

  const [view, setview] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState({});
  const navigateChangeView = (newView, product = null) => {
    setview(newView);
    setSelectedProduct(product);
  }
  
  // const [cart, setCart]=useReducer([]);

  return (
    <div>
      <>
        <BrowserRouter>
          <CustomNavBar />
          <Routes>

            <Route path="/" element={<Home newViewFromApp={navigateChangeView} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="productDetails" element={<ProductDetails selectedProduct={selectedProduct} />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
    // <div>

    // <CustomNavBar newViewFromApp={navigateChangeView} cart={cart} setCart={setCart}/>
    // {view === "home" ? <Home newViewFromApp={navigateChangeView} cart={cart} setCart={setCart}/> : view ==="about" ? <About/> : view ==="contact" ? <Contact/> : view==="productDetails" ? <ProductDetails selectedProduct={selectedProduct}/> :""}

    // </div>
  )
}


