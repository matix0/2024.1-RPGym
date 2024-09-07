import React from "react";
import { Caixa, DescriptionBox, Grid, Title } from "./styles";

const Desafios = () => {
  return (
    <Grid>
      <Caixa>
        <DescriptionBox>
          <Title style={{ color: "#6B00D6", fontWeight: "600" }}>
            Desafios em Andamento
          </Title>
        </DescriptionBox>
      </Caixa>
    </Grid>
  );
};

export default Desafios;
