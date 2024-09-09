import React from "react";
import notificacoes from "../assets/images/icones/notificacoes.png";
import stars from "../assets/images/icones/stars.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">RPGym</div>
      <div className="Vazio"></div>
      <div className="Bell">
        <img src={notificacoes} alt="notificações" />
      </div>
      <div className="Moeda">
        <img src={stars} alt="Moeda" />
      </div>
      <div className="Moedas">
        <div className="MoedasTopo">Moedas</div>
        <div className="NumeroMoedas">
          1.1mil <strong>&nbsp;Moedas</strong>
        </div>
      </div>
    </div>
  );
};

export default Header;
