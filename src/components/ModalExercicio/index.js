import React, { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalContent,
  ActiveButton,
  Input,
  CaloTem,
} from "./styles";

import { MdClose } from "react-icons/md";
import TextAreaExercicio from "../TextAreaExercicio";
import InputText from "../inputText";

function ModalExercicio(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={props.CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1>Registrar atividade</h1>
            <InputText placeholder="Nome da atividade" type="text" />
            <CaloTem>
              <Input placeholder="Calorias (Cal)" type="number" />
              <Input placeholder="Tempo (min)" type="number" />
            </CaloTem>
            <TextAreaExercicio
              placeholder="Descrição da atividade"
              cols={22}
              rows={10}
            />
            <ActiveButton onClick={props.SuccessOnClick}>
              Registrar
            </ActiveButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalExercicio;
