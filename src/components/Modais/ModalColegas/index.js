import React, { useEffect, useState, useRef } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  DescriptionBox,
  BoxListPersons,
  FriendBox,
  FriendName,
  GroupItem,
  GroupList,
  ModalHeader,
  ModalScrollableContent,
} from "./styles";

import { MdClose } from "react-icons/md";

const BancoFalsoPessoas = [
  { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
  { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
  { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
  { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
  { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
  { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
  { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
  { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
  { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
  { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
  { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
  { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
];

const BancoFalsoPessoas1 = [
  { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
  { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
  { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
  { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
];

function ModalColegas({ isOpen, CloseOnClick }) {
  const [fontSize, setFontSize] = useState(1); // Estado para controlar o tamanho da fonte
  const boxListRef = useRef(null); // Ref para o BoxListGroups
  const [marginTop, setMarginTop] = useState(1);

  // Função que atualiza o tamanho da fonte com base no scroll
  const handleScroll = () => {
    const scrollTop = boxListRef.current.scrollTop;
    if (scrollTop > 0) {
      setFontSize(0.7); // Diminui a fonte quando faz o scroll para baixo
      setMarginTop(1.5);
    } else {
      setFontSize(1); // Retorna ao tamanho normal quando volta ao topo
      setMarginTop(1);
    }
  };

  useEffect(() => {
    const boxListGroups = boxListRef.current;
    if (boxListGroups) {
      boxListGroups.addEventListener("scroll", handleScroll);
      return () => {
        boxListGroups.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <ModalHeader>
            <CloseButton onClick={CloseOnClick}>
              <MdClose />
            </CloseButton>
            <DescriptionBox
              style={{
                fontSize: `${fontSize}em`,
                marginTop: `${marginTop}em`,
                transition: "font-size 0.2s ease, margin-top 0.2s ease",
              }}
            >
              <h1 style={{ color: "white" }}>Colegas de grupo</h1>
              <h2
                style={{
                  opacity: "80%",
                  marginTop: "-1em",
                  fontWeight: "400",
                  marginBottom: "0",
                }}
              >
                Acompanhe o progresso!
              </h2>
            </DescriptionBox>
          </ModalHeader>
          <ModalScrollableContent>
            <BoxListPersons ref={boxListRef}>
              {BancoFalsoPessoas.map((amigo, index) => (
                <FriendBox key={index}>
                  <FriendName>{amigo.nome}</FriendName>
                  <GroupList>
                    <p style={{ fontSize: "0.7em", fontWeight: "200" }}>
                      Grupos em comum:
                    </p>{" "}
                    {amigo.gruposComuns.map((grupo, i) => (
                      <GroupItem key={i}>{grupo}</GroupItem>
                    ))}
                  </GroupList>
                </FriendBox>
              ))}
            </BoxListPersons>
          </ModalScrollableContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalColegas;
