import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register";
import Character from "./pages/Character";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Login />} />} />
      <Route
        path="/register"
        element={<ProtectedRoute element={<Register />} />}
      />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route
        path="/character"
        element={<ProtectedRoute element={<Character />} />}
      />
    </Routes>
  );
}

export default App;
