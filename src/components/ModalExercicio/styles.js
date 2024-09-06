import styled from "styled-components";

// Background que escurece a tela quando o modal é aberto
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  // Cor preta semitransparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Container do modal
export const ModalContainer = styled.div`
  background: linear-gradient(180deg, #6B00D6, #8000FF);
  padding: 2em;
  border-radius: 10px;
  width: 50%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  position: absolute;
  color: white;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export const CaloTem = styled.div`
 display: flex;
 flex-direction: row;
 justify-items: end;
 align-items: center;
 gap: 0.6em;
`;

export const ActiveButton = styled.button`
    color: #8000FF;
    border: black;
    font-weight: 600;
    font-size: 1.2em;
    cursor: pointer;
    background: linear-gradient(180deg, #FFA800, #FFE6B6);
    width: 8em;
    height: 1.7em;
    border-radius:0.4vw;
    display: flex;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;    
    transition: all 0.2s;
    font-family: Poppins;
    font-style: normal;
    margin-top: 1em;

    &:hover {
        filter: brightness(1.1); /* Aumenta o brilho em 10% */
    }

    &:active{
        transform: translateY(2px);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
`;

export const Input = styled.input`
  height: 6vh;
  width: 9em;
  border-radius: 0.5vw;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 0.9vw;
  color: black;
  margin-bottom: 0.8vw;
  padding-left: 0.8vw;
  border-width: 0.1vw;
  border-style: solid;
  border-color: #cccccc;
  flex-grow: 1;
`;