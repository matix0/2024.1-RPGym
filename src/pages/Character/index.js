import { Background, Posicao } from "./styles";
import ModalRegisterCharacter from "../../components/ModalRegisterCharacter";

const Character = () => {
  return (
    <Background>
      <Posicao>
        <ModalRegisterCharacter />
      </Posicao>
    </Background>
  );
};

export default Character;
