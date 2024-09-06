import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  DivForms,
  DivDescricao,
  Butao,
  DivFormsBaixo,
  Div,
  ImagemWrapper,
  PersonagemDiv,
} from "./styles";
import { Input } from "../inputText/styles";
import personagens from "../../assets/images/personagens.png";

function ModalRegisterCharacter() {
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);

  const handleClick = (personagem) => {
    setSelectedPersonagem(personagem);
  };

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Insira seus dados pessoais</Subtitle>
        </DivDescricao>
        <DivFormsBaixo>
          <Input placeholder="Peso" />
          <Div></Div>
          <Input placeholder="Altura" />
        </DivFormsBaixo>
        <Subtitle>Seu personagem</Subtitle>

        <ImagemWrapper>
          <PersonagemDiv
            selected={selectedPersonagem === 1}
            onClick={() => handleClick(1)}
            style={{ left: 0 }}
          />
          <PersonagemDiv
            selected={selectedPersonagem === 2}
            onClick={() => handleClick(2)}
            style={{ right: 0 }}
          />
          <img src={personagens} alt="Personagens" />
        </ImagemWrapper>

        <Butao
          onClick={() => {
            window.open("/dashboard", "_blank");
          }}
        >
          Vamos lá
        </Butao>
      </DivForms>
    </Container>
  );
}

export default ModalRegisterCharacter;
