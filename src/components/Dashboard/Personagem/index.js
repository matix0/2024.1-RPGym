import React, { useState } from "react";
import { ApelidoBox, Box, BoxInfos, ButtonBox, IMC, Timc, Vimc, Metricas, TPeso, TAltura, PesoBox, AlturaBox, Peso, Altura, BoxInfoPerson, BoxPerson, ActiveButton, MoreBox1, CircleBox1, MoreBox2, CircleBox2, MoreBox3, CircleBox3} from "./styles";

import { RiAddLine } from "react-icons/ri";
import ModalExercicio from "../../ModalExercicio";

const Personagem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CloseHandleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Alterna o estado do modal
  };

  const SuccessHandleModalToggle = () => {
    
    setIsModalOpen(!isModalOpen); // Alterna o estado do modal PARA QUANDO REGISTRA A ATIVIDADE
  };

  return (
    <Box>
      <ApelidoBox>
        [Apelido]
      </ApelidoBox>
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
            <ActiveButton onClick={CloseHandleModalToggle}>
              <RiAddLine style={{marginRight:"0.3em"}}/>
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
      
      {isModalOpen && <ModalExercicio CloseOnClick={CloseHandleModalToggle} SuccessOnClick={SuccessHandleModalToggle}/>}
    </Box>
  )
};

export default Personagem;
