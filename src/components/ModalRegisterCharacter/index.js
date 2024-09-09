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
import userService from "../../services/userService";

function ModalRegisterCharacter() {
  const [weight, setPeso] = useState("");
  const [height, setAltura] = useState("");
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);
  const [error, setError] = useState("");

  const handleClick = (personagem) => {
    setSelectedPersonagem(personagem);
  };

  const handleRegister = async () => {
    // Validação dos campos
    if (!weight || !height || !selectedPersonagem) {
      setError(
        "Por favor, preencha todos os campos e selecione um personagem."
      );
      return;
    }

    // Limpa o erro se estiver tudo certo
    setError("");

    // Armazena os dados (você pode salvar em localStorage ou em um backend aqui)
    const characterData = {
      weight,
      height,
      personagem: selectedPersonagem,
    };

    console.log(characterData); // Para verificar os dados no console
    const userId = localStorage.getItem("userId");
    await userService.updateUser(userId, characterData);
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
            value={weight}
            onChange={(e) => setPeso(e.target.value)} // Armazena o weight
          />
          <Div></Div>
          <Input
            placeholder="Altura"
            value={height}
            onChange={(e) => setAltura(e.target.value)} // Armazena a height
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

        <Butao onClick={handleRegister}>Vamos lá</Butao>
      </DivForms>
    </Container>
  );
}

export default ModalRegisterCharacter;
