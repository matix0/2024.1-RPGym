import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../styles/global.css";
import "../../styles/dashboard.css";
import Personagem from "../../components/Dashboard/Personagem/Personagem";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="Tela">
        <Personagem />
        <div className="Amigos"></div>
        <div className="Desafios"></div>
        <div className="Grupos"></div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
