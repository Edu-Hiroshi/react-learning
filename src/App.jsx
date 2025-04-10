import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import "./App.css";
import "./server.js";

import Layout       from "./components/Layout";
import Home         from "./pages/Home";
import About        from "./pages/About";
import Books        from "./pages/Books/Books.jsx";
import BookDetail   from "./pages/Books/BookDetail.jsx";
import DashboardNav from "./components/DashboardNav.jsx";
import Dashboard    from "./pages/Dashboard/Dashboard.jsx";
import Details      from "./pages/Dashboard/Details.jsx";
import Reviews      from "./pages/Dashboard/Reviews.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="books" element={<Books />} />
            <Route path="books/:id" element={<BookDetail />} />

            <Route path="dashboard" element={<DashboardNav />}>
              <Route index element={<Dashboard />} />
              <Route path="details" element={<Details />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
