import React from "react";
import { Routes, Route, Navigate } from "react-router";
import MainPage from "./pages/MainPage";
import FavoritesPage from "./pages/FavoritesPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />

      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
