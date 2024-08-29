import { Route, Routes } from "react-router-dom";
import React from "react";
import "./styles/global.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
