import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import "./App.css";
import "./server.js";

import Layout         from "./components/Layout";
import Home           from "./pages/Home";
import About          from "./pages/About";
import Books          from "./pages/Books/Books.jsx";
import BookDetail     from "./pages/Books/BookDetail.jsx";
import DashboardNav   from "./components/DashboardNav.jsx";
import Dashboard      from "./pages/Dashboard/Dashboard.jsx";
import Tags           from "./pages/Dashboard/Tags.jsx";
import Reviews        from "./pages/Dashboard/Reviews.jsx";
import Reading        from "./pages/Dashboard/Reading.jsx";
import ReadingDetail  from "./pages/Dashboard/ReadingDetail.jsx";
import ReadingInfo    from "./pages/Dashboard/ReadingInfo.jsx";
import ReadingPricing from "./pages/Dashboard/ReadingPricing.jsx";
import ReadingPhotos  from "./pages/Dashboard/ReadingPhotos.jsx";
import NotFound       from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>}/>

            <Route path="books" element={<Books/>}/>
            <Route path="books/:id" element={<BookDetail/>}/>

            <Route path="dashboard" element={<DashboardNav/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="tags" element={<Tags/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route path="reading" element={<Reading/>}/>
              
              <Route path="reading/:id" element={<ReadingDetail/>}>
                <Route index element={<ReadingInfo/>}/>
                <Route path="pricing" element={<ReadingPricing/>}/>
                <Route path="photos" element={<ReadingPhotos/>}/>
              </Route>
            </Route>

            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
