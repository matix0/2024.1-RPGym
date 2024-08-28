import React from "react";
import notificações from "../assets/imagens/icones/notificações.png";
import stars from "../assets/imagens/icones/stars.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">RPGym</div>
      <div className="Vazio"></div>
      <div className="Bell">
        <img src={notificações} alt="notificações" />
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
