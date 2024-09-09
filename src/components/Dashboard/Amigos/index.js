import React, { useState, useRef, useEffect } from "react";
import { Caixa, BoxListPersons, Grid, BoxButton, DescriptionBox, Title, SubTitle, ButtonMore, FriendBox, FriendName, GroupItem, GroupList, CircleBox1, MoreBox1, CircleBox2 } from "./styles";

import ModalColegas from "../../Modais/ModalColegas";

const BancoFalsoPessoas = [
  { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
  { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
  { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
  { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] }
];

const Amigos = () => {

  const [fontSize, setFontSize] = useState(1); // Estado para controlar o tamanho da fonte
  const boxListRef = useRef(null); // Ref para o BoxListGroups

  // Função que atualiza o tamanho da fonte com base no scroll
  const handleScroll = () => {
    const scrollTop = boxListRef.current.scrollTop;
    if (scrollTop > 0) {
      setFontSize(0.7); // Diminui a fonte quando faz o scroll para baixo
    } else {
      setFontSize(1); // Retorna ao tamanho normal quando volta ao topo
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const CloseHandleModalToggle = () => {
    setIsClosing(true); // Inicia o fechamento
    setTimeout(() => {
      setIsModalOpen(false); // Fecha o modal após a animação
      setIsClosing(false); // Reseta o estado de fechamento
    }, 300); // Ajuste o tempo para o mesmo da duração da animação de saída
  };

  const SuccessHandleModalToggle = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Grid>
      <Caixa>
        <DescriptionBox style={{ fontSize: `${fontSize}em`, transition: 'font-size 0.2s ease' }} >
          <Title>Seus Colegas</Title>
          <SubTitle>Acompanhe o progresso!</SubTitle>
        </DescriptionBox>
        <BoxListPersons ref={boxListRef}>
          {BancoFalsoPessoas.map((amigo, index) => (
            <FriendBox key={index}>
              <FriendName>{amigo.nome}</FriendName>
              <GroupList>
                {amigo.gruposComuns.map((grupo, i) => (
                  <GroupItem key={i}>{grupo}</GroupItem>
                ))}
              </GroupList>
            </FriendBox>
          ))}
        </BoxListPersons>
        <BoxButton>
          <ButtonMore onClick={openModal}>
            Mais detalhes
          </ButtonMore>
        </BoxButton>
        <CircleBox1>
          .
        </CircleBox1>
        <MoreBox1>
          +
        </MoreBox1>
        <CircleBox2>
          .
        </CircleBox2>

        {isModalOpen && <ModalColegas isOpen={!isClosing} CloseOnClick={CloseHandleModalToggle} SuccessOnClick={SuccessHandleModalToggle}/>}
      </Caixa>
    </Grid>
  )
};

export default Amigos;