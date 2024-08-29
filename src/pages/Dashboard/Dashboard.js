import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../styles/global.css";
import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="Tela">
        <div className="Personagem"></div>
        <div className="Amigos"></div>
        <div className="Desafios"></div>
        <div className="Grupos"></div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
