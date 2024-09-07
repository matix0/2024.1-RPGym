import React from "react";
import { Caixa, BoxListPersons, BoxButton, DescriptionBox, Title, SubTitle, ButtonMore, FriendBox, FriendName, GroupItem, GroupList, CircleBox1, MoreBox1, CircleBox2 } from "./styles";

const BancoFalsoPessoas = [
  { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
  { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
  { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
  { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
  { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
  { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] }
];

const Amigos = () => {
  return (
    <Caixa>
      <DescriptionBox>
        <Title>Colegas</Title>
        <SubTitle>Acompanhe o progresso</SubTitle>
      </DescriptionBox>
      <BoxListPersons>
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
        <ButtonMore>
          Mais Colegas
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
    </Caixa>
  )
};

export default Amigos;
