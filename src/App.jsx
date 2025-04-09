import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import './App.css';
import './server.js';

import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
