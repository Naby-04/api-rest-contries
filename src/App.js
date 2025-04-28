// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import PaysCard from "./components/Payscard";
import DetailsPage from "./components/detailsPage";

// ------------------

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="text-center my-3">Countries</h1>
        <Routes>
          <Route>
            <Route path="/" element={<PaysCard />} />
            <Route
              path="./components/detailsPage.jsx/code:"
              element={<DetailsPage />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
