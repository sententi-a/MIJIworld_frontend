import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/font.css";
import PageFallback from "@components/common/PageFallback";
import MainPage from "@pages/MainPage";

const MapPage = lazy(() => import("@pages/MapPage"));
const ListPage = lazy(() => import("@pages/ListPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
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
