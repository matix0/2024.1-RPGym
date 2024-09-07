import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../styles/global.css";
import "../../styles/dashboard.css";
import Personagem from "../../components/Dashboard/Personagem";
import Amigos from "../../components/Dashboard/Amigos/Amigos";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="Tela">
        <Personagem />
        <Amigos />
        <div className="Desafios"></div>
        <div className="Grupos"></div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
