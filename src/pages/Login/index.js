import { Background, Posicao } from "./styles";
import ModalLogin from "../../components/ModalLogin";

const Login = () => {
  return (
    <Background>
      <Posicao>
        <ModalLogin />
      </Posicao>
    </Background>
  );
};

export default Login;
