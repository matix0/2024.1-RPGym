import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = Boolean(localStorage.getItem("userId")); // Verifica se o usuário está autenticado
  const location = useLocation();
  const currentPath = location.pathname;

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = ["/", "/register", "/character"];

  const isPublicRoute = publicRoutes.includes(currentPath);

  if (isPublicRoute || isAuthenticated) {
    return element;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
