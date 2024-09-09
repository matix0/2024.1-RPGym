import styled, { keyframes } from "styled-components";

// Defina a animação de subir e descer
const moveUpDown = keyframes`
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px); /* Sobe 10px */
  }
  0% {
    transform: translateY(0); /* Volta à posição inicial */
  }
`;

export const Grid = styled.div`
  grid-area: Grupos;
  margin: auto;
`;

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 35em;
  height: 18em;
  position: realtive;
  border-color: white;
  border-style: solid;
  border-width: 0.5px;
  border-radius: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin-left: 2em;
`;

export const BoxMore = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: -1em;
`;

export const SubTitle = styled.h4`
  font-weight: 400;
  margin-bottom: 3em;
  opacity: 75%;
`;

export const BoxListGroups = styled.div`
  display: flex;
  margin-left: 2em;
  flex-grow: 1;
  flex-direction: column;
  margin-top: -2em;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const BoxButton = styled.div`
  display: flex;
  position: absolute;
  flex-shrink: 0;
  right: 230px;
  align-items: center;
  justify-content: center;
  top: 12em;
  right: 2em;
`;

export const BoxAdd = styled.div`
  display: flex;
  position: absolute;
  border: black;
  font-weight: 600;
  font-size: 1.2em;
  cursor: pointer;
  background-color: whitesmoke;
  width: 2em;
  height: 1.7em;
  border-radius: 0.4vw;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  font-family: Poppins;
  font-style: normal;
  margin-left: 23em;
  top: 1.6em; /* Mantém a posição vertical fixa */
  transform: translateY(-50%); /* Centraliza verticalmente */

  &:hover {
    filter: brightness(1.1); /* Aumenta o brilho em 10% */
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonAdd = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonMore = styled.button`
  color: white;
  border: black;
  font-weight: 300;
  font-size: 1em;
  cursor: pointer;
  background-color: #171717;
  width: 10em;
  height: 1.7em;
  border-radius: 0.4vw;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  font-family: Poppins;
  font-style: normal;

  &:hover {
    filter: brightness(1.1); /* Aumenta o brilho em 10% */
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  // animation: ${moveUpDown} 4s infinite ease-in-out;
`;

export const GroupBox = styled.div`
  margin-top: 20px;
`;

export const GroupName = styled.h3`
  font-size: 1em;
  font-weight: 600;
  margin-top: -1em;
`;

export const GroupItem = styled.ul`
  font-size: 0.7em;
  margin-left: -2em;
  margin-top: -1em;
`;

export const CircleBox1 = styled.div`
  display: flex;
  position: absolute;
  color: #171717;
  font-weight: 700;
  font-size: 3.5em;
  z-index: 10;
  left: 6.9em;
  top: 1em;
  cursor: default;
`;

export const MoreBox1 = styled.div`
  display: flex;
  position: absolute;
  color: #171717;
  font-weight: 700;
  font-size: 1.7em;
  z-index: 10;
  left: 9.5em;
  top: 1em;
  cursor: default;
`;

export const CircleBox2 = styled.div`
  display: flex;
  position: absolute;
  color: #171717;
  font-weight: 700;
  font-size: 10em;
  z-index: 10;
  left: 1.4em;
  top: -0.1em;
  cursor: default;
`;
