import React from "react";
import {
  Container,
  Title,
  Subtitle,
  SubSubSubSubtitle,
  DivForms,
  DivDescricao,
  Cadastrese,
  DivFormsBaixo,
} from "./styles";
import InputText from "../inputText";
import InputIdade from "../inputIdade/index.js";

function ModalRegister() {
  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Faça o cadastro e começe seu legado!</Subtitle>
        </DivDescricao>
        <InputText placeholder="Email"/>
        <InputText placeholder="Senha" type="password"/>
        <InputText placeholder="Confirme a sua senha" type="password"/>
        <DivFormsBaixo>
          <InputText placeholder="Apelido"/>
          <InputIdade placeholder="Idade"/>
        </DivFormsBaixo>
        <Cadastrese
          onClick={() => {
            window.open("/dashboard", "_self");
          }}
        >
          Cadastre-se
        </Cadastrese>
        <SubSubSubSubtitle>
          Já tem uma conta? <a href="/">Faça Log in</a>
        </SubSubSubSubtitle>
      </DivForms>
    </Container>
  );
}

export default ModalRegister;
