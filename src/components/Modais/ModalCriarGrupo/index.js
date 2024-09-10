import React, { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalContent,
  ActiveButton,
  Input,
} from "./styles";

import { MdClose } from "react-icons/md";
import InputText from "../../inputText";
import groupService from "../../../services/groupService";
function ModalCriarGrupos({ isOpen, CloseOnClick, SuccessOnClick }) {
  // Estados para armazenar os valores dos inputs
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [nomeDescricao, setNomeDescricao] = useState("");
  const userId = localStorage.getItem("userId");
  // Função para verificar se todos os campos estão preenchidos
  const areFieldsValid = () => {
    return nomeGrupo.trim() !== "", nomeDescricao.trim() !== "";
  };
  const generateJoinCode = (length = 3) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let joinCode = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      joinCode += charset[randomIndex];
    }
    return joinCode;
  };
  // Função para lidar com o clique de "Registrar"
  const handleRegistrar = () => {
    if (areFieldsValid()) {
      const Grupo = {
        name: nomeGrupo,
        description: nomeDescricao,
        creator: userId,
        users: [userId],
        joinCode: generateJoinCode(),
      };
      groupService.createGroup(Grupo);
      SuccessOnClick(Grupo); // Envia os dados para a função SuccessOnClick
      window.location.reload();
    } else {
      alert("Preencha todos os campos antes de registrar!");
    }
  };

  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1 style={{ color: "white" }}>Crie seu grupo!</h1>
            <InputText
              placeholder="Nome do grupo"
              type="text"
              value={nomeGrupo}
              onChange={(e) => setNomeGrupo(e.target.value)}
            />
            <InputText
              placeholder="Descrição do grupo"
              type="text"
              value={nomeDescricao}
              onChange={(e) => setNomeDescricao(e.target.value)}
            />
            <ActiveButton onClick={handleRegistrar}>Criar</ActiveButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalCriarGrupos;
