import React from 'react';
import { HomePage } from './landing/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import Signup from './landing/signup/Signup';
import AboutPage from './landing/about/AboutPage';
import ProductPage from './landing/products/ProductPage';
import SupportPage from './landing/support/SupportPage';
import PricingPage from './landing/pricing/PricingPage';
import { Navbar } from './landing/Navbar';
import Footer from './landing/Footer';
import NotFound from './landing/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
