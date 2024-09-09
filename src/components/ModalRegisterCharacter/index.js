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
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);
  const [error, setError] = useState("");

  const handleClick = (personagem) => {
    setSelectedPersonagem(personagem);
  };

  const handleRegister = () => {
    // Validação dos campos
    if (!peso || !altura || !selectedPersonagem) {
      setError("Por favor, preencha todos os campos e selecione um personagem.");
      return;
    }

    // Limpa o erro se estiver tudo certo
    setError("");

    // Armazena os dados (você pode salvar em localStorage ou em um backend aqui)
    const characterData = {
      peso,
      altura,
      personagem: selectedPersonagem,
    };

    console.log(characterData); // Para verificar os dados no console

    // Redireciona para o dashboard
    window.open("/dashboard", "_blank");
  };

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Insira seus dados pessoais</Subtitle>
        </DivDescricao>
        <DivFormsBaixo>
          <Input
            placeholder="Peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)} // Armazena o peso
          />
          <Div></Div>
          <Input
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)} // Armazena a altura
          />
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

        {/* Exibe mensagem de erro se houver */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Butao onClick={handleRegister}>
          Vamos lá
        </Butao>
      </DivForms>
    </Container>
  );
}

export default ModalRegisterCharacter;
