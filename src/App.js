import { Route, Routes } from "react-router-dom";
import React from "react";
import "./styles/global.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register";
import Character from "./pages/Character";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Character" element={<Character />} />
    </Routes>
  );
}

export default App;
