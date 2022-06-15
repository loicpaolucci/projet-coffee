import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar/style.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Signin from './pages/Signin';
import Products from './Product';
import Arabica from './Product/arabica';
import Robusta from './Product/robusta';
import Autres from './Product/autre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
    <BrowserRouter>
    <Navbar />
    <Routes> 
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signin" element={<Signin />} /> 
    <Route path="/product" element={<Products/>} /> 
    <Route path="/product/arabica" element={<Arabica/>} />  
    <Route path="/product/robusta" element={<Robusta/>} /> 
    <Route path="/product/autre" element={<Autres/>} /> 
    </Routes>
    <App />
    </BrowserRouter>
  
);

