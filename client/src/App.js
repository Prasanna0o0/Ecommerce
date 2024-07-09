import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Home from './Components/Home';
import ProductListing from './Components/ProductListing';
import Checkout from './Components/Checkout';
import Stripe from './Components/Payments/Stripe'
import Sucess from './Components/Sucess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/sign" element={<SignupPage />} />
        <Route  path="/lo" element={<LoginPage />} />
        {/* <Route path="/pro" element={<ProductListing />} /> */}
        <Route path="/" element={<ProductListing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path ="/sp" element={<Stripe />} />
        <Route path ="/sus" element={<Sucess />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
