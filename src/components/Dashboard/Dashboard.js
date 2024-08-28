import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
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
