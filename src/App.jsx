import React from 'react';
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/ShopCategory';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/more' element={<ShopCategory Category="more" />} />
        <Route path='/boAt Personilisation' element={<ShopCategory Category="boAt Personilisation" />} />
        <Route path='/gift with boAt' element={<ShopCategory Category="Gift with boAt" />} />
        <Route path='/corporate Orders' element={<ShopCategory Category="Corporate Orders" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
