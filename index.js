import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clothing from "./Components/Clothing"
import Product from "./Components/Product"



import { BrowserRouter, Routes, Route } from "react-router-dom";

// import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<App />}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

