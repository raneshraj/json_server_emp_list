import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpList from "./EmpList";
import Empcreate from "./Empcreate";
import Empdetail from "./Empdetail";
import Empedit from "./Empedit";

import './App.css'


function App() {
  return (
    <>
     <div className="App">
       <h1>Helloo Babyyy</h1>
        <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<EmpList/>}></Route>
            <Route path="/employee/create" element={<Empcreate />}></Route>
            <Route path="/employee/detail/:empid" element={<Empdetail />} ></Route>
            <Route path="/employee/edit/:empid" element={<Empedit />} ></Route>

            </Routes>

       
        </BrowserRouter>
        </div>
    </>
  );
}

export default App;


