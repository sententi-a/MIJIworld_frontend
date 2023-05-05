import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/font.css";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
