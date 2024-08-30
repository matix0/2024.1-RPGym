import React from "react";
import {
  Container,
  Title,
  Subtitle,
  SubSubtitle,
  SubSubSubtitle,
  SubSubSubSubtitle,
  DivForms,
  DivDescricao,
  DivSubdescricao,
  Login,
} from "./styles";
import { Input } from "../inputText/styles";

function ModalLogin() {
  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <DivSubdescricao>
            <Subtitle>Bem-vindo de volta</Subtitle>
            <SubSubtitle>Faça login para iniciar sua aventura!</SubSubtitle>
          </DivSubdescricao>
        </DivDescricao>
        <Input />
        <Input />
        <SubSubSubtitle>Esqueceu sua senha?</SubSubSubtitle>
        <Login
          onClick={() => {
            window.open("/dashboard", "_self");
          }}
        >
          Log In
        </Login>
        <SubSubSubSubtitle>
          Não tem uma conta? <a href="/Register">Cadastre-se</a>
        </SubSubSubSubtitle>
      </DivForms>
    </Container>
  );
}

export default ModalLogin;
