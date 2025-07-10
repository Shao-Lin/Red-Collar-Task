import React from "react";
import { Routes, Route, Navigate } from "react-router";
import MainPage from "./pages/MainPage";
import FavoritesPage from "./pages/FavoritesPage";
import BookPage from "./pages/BookPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />

      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/book/:bookId" element={<BookPage />} />
    </Routes>
  );
}

export default App;
