import React, { useState } from "react";
import {
  ApelidoBox,
  Box,
  BoxInfos,
  ButtonBox,
  IMC,
  Timc,
  Vimc,
  Metricas,
  TPeso,
  TAltura,
  PesoBox,
  AlturaBox,
  Peso,
  Altura,
  BoxInfoPerson,
  BoxPerson,
  ActiveButton,
  MoreBox1,
  CircleBox1,
  MoreBox2,
  CircleBox2,
  MoreBox3,
  CircleBox3,
  Grid,
} from "./styles";

import { RiAddLine } from "react-icons/ri";
import ModalExercicio from "../../Modais/ModalExercicio"

const Personagem = () => {
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
      <Box>
        <ApelidoBox>[Apelido]</ApelidoBox>
        <BoxInfoPerson>
          <BoxInfos>
            <IMC>
              <Timc>IMC:</Timc>
              <Vimc>[Valor do IMC]</Vimc>
            </IMC>
            <Metricas>
              <PesoBox>
                <TPeso>Peso:</TPeso>
                <Peso>[Valor do peso]</Peso>
              </PesoBox>
              <AlturaBox>
                <TAltura>Altura :</TAltura>
                <Altura>[Valor da Altura]</Altura>
              </AlturaBox>
            </Metricas>
            <ButtonBox>
              <ActiveButton onClick={openModal}>
                <RiAddLine style={{ marginRight: "0.3em" }} />
                Registrar
              </ActiveButton>
          </ButtonBox>
        </BoxInfos>
        <BoxPerson>
        </BoxPerson>
      </BoxInfoPerson>
      <MoreBox1>
        +
      </MoreBox1>
      <CircleBox1>
        .
      </CircleBox1>
      <MoreBox2>
        +
      </MoreBox2>
      <CircleBox2>
        .
      </CircleBox2>
      <MoreBox3>
        +
      </MoreBox3>
      <CircleBox3>
        .
      </CircleBox3>
      
      {isModalOpen && <ModalExercicio isOpen={!isClosing} CloseOnClick={CloseHandleModalToggle} SuccessOnClick={SuccessHandleModalToggle}/>}
    </Box>
  </Grid>
  )
};

export default Personagem;
