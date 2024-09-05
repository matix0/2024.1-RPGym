import React from "react";
import { ApelidoBox, Box, BoxInfos, IMC, Timc, Vimc, Metricas, TPeso, TAltura, PesoBox, AlturaBox, Peso, Altura, BoxInfoPerson, BoxPerson,} from "./styles";

const Personagem = () => {
  return (
    <Box>
      <ApelidoBox>
        Jacinto
      </ApelidoBox>
      <BoxInfoPerson>
        <BoxInfos>
          <IMC>
            <Timc>IMC:</Timc>
            <Vimc>[Valor do IMC]</Vimc>
          </IMC>
          <Metricas>
            <PesoBox>
              <TPeso>Peso</TPeso>
              <Peso>[Valor do peso]</Peso>
            </PesoBox>
            <AlturaBox>
              <TAltura>Altura</TAltura>
              <Altura>[Valor da Altura]</Altura>
            </AlturaBox>
          </Metricas>
        </BoxInfos>
        <BoxPerson>
        </BoxPerson>
      </BoxInfoPerson>
    </Box>
  )
};

export default Personagem;
