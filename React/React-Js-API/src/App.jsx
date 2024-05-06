import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Show from "./components/Show";

const App = () => {
  
  //----------post-----------
  // const addProduct = () => {
  //   const api = "https://fakestoreapi.com/products";

  //   axios
  //     .post(api,{
  //       title:"new pro",
  //       price:99,
  //       description:"added by me",
  //       image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
  //       category:"car",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="pt-[5%] pl-[5%]">      
      <nav className="flex gap-5 ">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/show" element={<Show/>}/>
      </Routes>
    </div>
  );
};

export default App;
