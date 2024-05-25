import {React,useState } from 'react'
import CustomNavBar from './layouts/CustomNavBar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App(){

 const [view, setview]=useState("home")
  const navigateChangeView= (newView)=>{
    setview(newView);
  }
  const [cart, setCart]=useState([]);
    return (
      <div>

      <CustomNavBar newViewFromApp={navigateChangeView} cart={cart} setCart={setCart}/>
      {view === "home" ? <Home cart={cart} setCart={setCart}/> : view ==="about" ? <About/> : <Contact/>}

      </div>
    )
  }


