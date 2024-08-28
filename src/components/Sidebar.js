import React from "react";
import campeonato from "../assets/imagens/icones/campeonatos.png";
import home from "../assets/imagens/icones/home.png";
import ranking from "../assets/imagens/icones/ranking.png";
import sobre from "../assets/imagens/icones/sobre.png";
import usuario from "../assets/imagens/icones/usuario.png";
import configuracoes from "../assets/imagens/icones/configuracoes.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Botão-Loja">
        <button class="Botão-Loja-Expandido">Loja</button>
      </div>
      <div className="Navegar">Navegar</div>
      <div className="Home">Home</div>
      <div className="IconHome">
        <img src={home} alt="home" />
      </div>
      <div className="Ranking">Ranking</div>
      <div className="IconRanking">
        <img src={ranking} alt="ranking" />
      </div>
      <div className="Campeonatos">Campeonatos</div>
      <div className="IconCampeonatos">
        <img src={campeonato} alt="campeonato" />
      </div>
      <div className="AjudaPadding"></div>
      <div className="Ajuda">Ajuda</div>
      <div className="Sobre-nos">Sobre nós</div>
      <div className="IconSobre-nos">
        <img src={sobre} alt="sobre" />
      </div>
      <div className="UsuarioPadding"></div>
      <div className="IconUsuario">
        <img src={usuario} alt="usuario" />
      </div>
      <div className="Usuario">
        <div className="UsuarioTexto">Usuário</div>
        <div className="Configuracoes">
          <img src={configuracoes} alt="Configurações" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
