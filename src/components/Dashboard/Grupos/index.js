import React from "react";
import { Caixa, BoxMore, BoxAdd, ButtonAdd, BoxListGroups, Grid, BoxButton, DescriptionBox, Title, SubTitle, ButtonMore, GroupBox, GroupName, GroupItem, CircleBox1, MoreBox1, CircleBox2 } from "./styles";
import { RiAddLine } from "react-icons/ri";

const BancoFalsoGrupos = [
    { nome: "Trabalho", numeroDePessoas: 8 },
    { nome: "Academia", numeroDePessoas: 5 },
    { nome: "Igreja", numeroDePessoas: 12 },
    { nome: "Família", numeroDePessoas: 6 },
    { nome: "Futebol", numeroDePessoas: 10 },
    { nome: "Faculdade", numeroDePessoas: 9 },
    { nome: "Teatro", numeroDePessoas: 7 },
    { nome: "Dança", numeroDePessoas: 4 },
    { nome: "Música", numeroDePessoas: 11 },
    { nome: "Culinária", numeroDePessoas: 3 },
    { nome: "Viagem", numeroDePessoas: 6 },
    { nome: "Esportes", numeroDePessoas: 14 }
  ];
  

const Grupos = () => {
  return (
    <Grid>
      <Caixa>
        <BoxMore>
            <DescriptionBox>
            <Title>Seus Grupos</Title>
            <SubTitle>Veja os seus grupos!</SubTitle>
            </DescriptionBox>
            <BoxAdd>
                <ButtonAdd>
                    <RiAddLine size={"100%"}/>  
                </ButtonAdd>
            </BoxAdd>
        </BoxMore>
        <BoxListGroups>
            {BancoFalsoGrupos.map((grupo, index) => (
                <GroupBox key={index}>
                <GroupName>{grupo.nome}</GroupName>
                <GroupItem>{grupo.numeroDePessoas} membros</GroupItem>
                </GroupBox>
            ))}
        </BoxListGroups>
        <BoxButton>
          <ButtonMore>
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
      </Caixa>
    </Grid>
  )
};

export default Grupos;