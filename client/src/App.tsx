import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/font.css";

const MainPage = lazy(() => import("@pages/MainPage"));
const MapPage = lazy(() => import("@pages/MapPage"));
const ListPage = lazy(() => import("@pages/ListPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
