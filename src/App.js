import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import {Cart} from './components/cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductDetailPage/>} />
        <Route path="/cart" element={<Cart/>} />
      

       </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
