import React, { useState, useEffect } from "react";
import userService from "../../../services/userService";
import {
  ApelidoBox,
  Box,
  BoxInfos,
  ButtonBox,
  IMC,
  Timc,
  Vimc,
  Metricas,
  TPeso,
  TAltura,
  PesoBox,
  AlturaBox,
  Peso,
  Altura,
  BoxInfoPerson,
  BoxPerson,
  ActiveButton,
  MoreBox1,
  CircleBox1,
  MoreBox2,
  CircleBox2,
  MoreBox3,
  CircleBox3,
  Grid,
} from "./styles";
import { RiAddLine } from "react-icons/ri";
import ModalExercicio from "../../Modais/ModalExercicio";

const Personagem = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imcValue, setImcValue] = useState();
  const [userName, setUser] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  userId = "66df38d02726b0ccd9d74e9e";
  useEffect(() => {
    const fetchUser = async () => {
      const { name } = await userService.getUser(userId);
      // console.log(name);
      setUser(name);
      // console.log(user);
    };

    const fetchIMC = async () => {
      const imc = await userService.getIMC(userId);
      setImcValue(imc);
    };

    const fetchMetrics = async () => {
      const { peso, altura } = await userService.getUserMetrics(userId);
      // console.log(peso, altura);
      setPeso(peso);
      setAltura(altura);
    };

    // Chama as funções quando o componente for montado
    fetchIMC();
    fetchMetrics();
    fetchUser();
  }, [userId]);

  const CloseHandleModalToggle = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const SuccessHandleModalToggle = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Grid>
      <Box>
        <ApelidoBox>
          {userName !== null ? userName : "Carregando..."}
        </ApelidoBox>
        <BoxInfoPerson>
          <BoxInfos>
            <IMC>
              <Timc>IMC:</Timc>
              <Vimc>{imcValue !== null ? imcValue : "Carregando..."}</Vimc>
            </IMC>
            <Metricas>
              <PesoBox>
                <TPeso>Peso:</TPeso>
                <Peso>{peso !== null ? peso : "Carregando..."}</Peso>
              </PesoBox>
              <AlturaBox>
                <TAltura>Altura :</TAltura>
                <Altura>{altura !== null ? altura : "Carregando..."}</Altura>
              </AlturaBox>
            </Metricas>
            <ButtonBox>
              <ActiveButton onClick={openModal}>
                <RiAddLine style={{ marginRight: "0.3em" }} />
                Registrar
              </ActiveButton>
            </ButtonBox>
          </BoxInfos>
          <BoxPerson></BoxPerson>
        </BoxInfoPerson>
        <MoreBox1>+</MoreBox1>
        <CircleBox1>.</CircleBox1>
        <MoreBox2>+</MoreBox2>
        <CircleBox2>.</CircleBox2>
        <MoreBox3>+</MoreBox3>
        <CircleBox3>.</CircleBox3>

        {isModalOpen && (
          <ModalExercicio
            isOpen={!isClosing}
            CloseOnClick={CloseHandleModalToggle}
            SuccessOnClick={SuccessHandleModalToggle}
          />
        )}
      </Box>
    </Grid>
  );
};

export default Personagem;
