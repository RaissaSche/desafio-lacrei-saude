import { ContainerFooter, Divisor, Texto } from "./footer-styles";
import RedesSociais from "./footer-redes-sociais";
import BotoesNavegacao from "./footer-botoes-navegacao";

const Footer = () => {
  return (
    <ContainerFooter>
      <Divisor />
      <BotoesNavegacao />
      <RedesSociais />
      <Texto>Desafio Front-end Lacrei</Texto>
    </ContainerFooter>
  );
};

export default Footer;
