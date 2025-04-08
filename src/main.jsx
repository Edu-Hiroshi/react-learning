import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
