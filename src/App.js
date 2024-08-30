import { Route, Routes } from "react-router-dom";
import React from "react";
import "./styles/global.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
