import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Main from "./pages/Main";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />

      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
