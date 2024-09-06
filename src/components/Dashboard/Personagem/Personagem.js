import React from "react";
import { ApelidoBox, Box, BoxInfos, ButtonBox, IMC, Timc, Vimc, Metricas, TPeso, TAltura, PesoBox, AlturaBox, Peso, Altura, BoxInfoPerson, BoxPerson, ActiveButton, MoreBox1, CircleBox1, MoreBox2, CircleBox2} from "./styles";

import { RiAddLine } from "react-icons/ri";

const Personagem = () => {
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
            <ActiveButton>
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
    </Box>
  )
};

export default Personagem;
