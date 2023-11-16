import { BotoesNavegacao, IConfiguracaoBotao} from "../commons/commons-index";
import { ContainerFooter, Divisor, Texto } from "./footer-styles";
import RedesSociais from "./footer-redes-sociais";

const Footer = () => {
  let configuracoesFooter = new Array<IConfiguracaoBotao>(
    { nome: "Home", isBold: true, path: "/home" },
    { nome: "Pessoa Usuária", isBold: false, path: "/pessoa-usuaria" },
    { nome: "Profissional", isBold: false, path: "/profissional" }
  );

  return (
    <ContainerFooter>
      <Divisor />
      <BotoesNavegacao configuracoes={configuracoesFooter} />
      <RedesSociais />
      <Texto>Desafio Front-end Lacrei</Texto>
    </ContainerFooter>
  );
};

export default Footer;
